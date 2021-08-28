import {patchDetailEventById, getDetailEventByIdWithAuth} from "@services";
import {CreateFormTemplate, Loading, ModalApp} from "@components";
import {Divider, Typography} from "@material-ui/core";
import React, {useState, useEffect} from "react";
import {useMutation, useQuery, useQueryClient} from "react-query";

import {useHistory} from "react-router";
import PropTypes from "prop-types";

import {useDispatch} from "react-redux";
import {setLoadingProgress} from "@services/redux/slices/dashboardPage";
import Fade from 'react-reveal/Fade';
import EditEventStyle from "./style";

const EditEventSection = ({match}) => {
	const classes = EditEventStyle();
	const dispatch = useDispatch();
	const [successModal, setSuccessModal] = useState(true);
	const [image, setImage] = useState(null);
	const {id} = match?.params;

	const queryClient = useQueryClient();

	const {
		data,
		isLoading: detailLoading,
		error,
		refetch,
	} = useQuery(["detail", id], async () => {
		const dataFilter = await getDetailEventByIdWithAuth(id);
		return dataFilter?.data?.id === id && dataFilter;
	});

	const history = useHistory();

	const handleCloseModalSuccess = () => {
		dispatch(setLoadingProgress(0));
		setSuccessModal(false);
		history.push("/");
	};

	const poster =
		data?.data &&
		`https://brainspark-cors.herokuapp.com/${data?.data?.imagePoster}`;
	const allData = data?.data;

	useEffect(async () => {
		if (poster !== undefined) {
			try {
				const imageUrl = await fetch(poster, {
					headers: {
						"X-Requested-With": "XMLHttpRequest",
					},
				});
				const blob = await imageUrl.blob();
				const type = blob.type.split("/")[1];
				const file = await new File(
					[blob],
					`${data?.data?.themeName.replaceAll(" ", "-")}.${type}`,
					{
						type: blob.type,
					}
				);
				setImage(file);
			} catch (err) {
				// eslint-disable-next-line no-console
				console.log(err);
			}
		}
	}, [poster, setImage]);

	const mutation = useMutation(
		props =>
			patchDetailEventById(
				id,
				props,
				{
					"Content-Type": "multipart/form-data",
				},
				{
					onUploadProgress: progressEvent => {
						dispatch(
							setLoadingProgress(
								Math.round((progressEvent.loaded * 100) / progressEvent.total)
							)
						);
					},
				}
			),
		{
			onSuccess: () => queryClient.invalidateQueries("event"),
		}
	);

	const dataResult = {...allData, imagePoster: image};


	return (
		<>
			{mutation.isSuccess && (
				<ModalApp
					isActive={successModal}
					handleClose={handleCloseModalSuccess}
					title="Update Berhasil"
				/>
			)}
			{!detailLoading && error?.response?.status === 404 && (
				<ModalApp
					isActive={successModal}
					handleClose={handleCloseModalSuccess}
					title="Event tidak ditemukan"
				/>
			)}
			<div className={classes.root}>
				{!detailLoading &&
				data?.status === 200 &&
				image !== null &&
				["image/jpeg", "image/jpg", "image/png"].includes(image?.type) ? (
					<Fade>
						<Typography className={classes.title}>Information</Typography>
						<Divider />
						<div className={classes.space} />
						<CreateFormTemplate
							defaultData={dataResult}
							handleSubmitForm={val => mutation.mutate(val)}
							refetch={refetch}
						/>
					</Fade>
				) : (
					<Loading
						isActive={detailLoading || data?.data?.length || image === null}
					/>
				)}
			</div>
		</>
	);
};

EditEventSection.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.oneOfType([
				PropTypes.objectOf(PropTypes.object),
				PropTypes.string,
			]),
		}),
	}).isRequired,
};

export default EditEventSection;
