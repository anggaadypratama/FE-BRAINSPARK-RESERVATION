import {postNewEvent} from "@services";
import {CreateFormTemplate, ModalApp} from "@components";
import {Divider, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {useMutation} from "react-query";

import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {setLoadingProgress} from "@services/redux/slices/dashboardPage";
import CreateEventStyle from "./style";

const CreateEventSection = () => {
	const classes = CreateEventStyle();
	const dispatch = useDispatch();

	const mutation = useMutation(props =>
		postNewEvent(
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
		)
	);

	const [successModal, setSuccessModal] = useState(true);

	const history = useHistory();

	const handleCloseModalSuccess = () => {
		dispatch(setLoadingProgress(0));
		setSuccessModal(false);
		history.push("/");
	};

	return (
		<>
			{mutation.isSuccess && (
				<ModalApp
					isActive={successModal}
					handleClose={handleCloseModalSuccess}
					title="Upload Berhasil"
				/>
			)}

			<div className={classes.root}>
				<Typography className={classes.title}>Information</Typography>
				<Divider />
				<div className={classes.space} />
				<CreateFormTemplate handleSubmitForm={val => mutation.mutate(val)} />
			</div>
		</>
	);
};

export default CreateEventSection;
