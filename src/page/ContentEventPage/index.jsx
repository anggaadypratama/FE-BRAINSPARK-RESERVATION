import React, {useEffect, useState} from "react";

import {EventTemplate, ModalApp, Loading} from "@components";

import {useQuery} from "react-query";
import {getDetailEventById} from "@services";

import loadable from "@loadable/component";
import {useSelector, useDispatch} from "react-redux";
import {selectedContentIndex} from "@services/redux/slices/contentPage";
import {useHistory} from "react-router";
import PropTypes from "prop-types";

const DetailEventPage = loadable(
	() => import(/* webpackPrefetch: true */ "./DetailEventPage"),
	{
		fallback: <Loading />,
	}
);
const UserFormPage = loadable(
	() => import(/* webpackPrefetch: true */ "./UserFormPage"),
	{
		fallback: <Loading />,
	}
);

const ContentEventPage = ({match}) => {
	const dispatch = useDispatch();
	const {id} = match?.params;
	const page = useSelector(({contentPage}) => contentPage.contentPageIndex);
	const [isDone, setIsDone] = useState(true);

	const history = useHistory();

	const {data, isLoading, error} = useQuery(["detail", id], async () => {
		const dataFetch = await getDetailEventById(id);
		return dataFetch?.data?.id === id && dataFetch;
	});

	useEffect(() => {
		dispatch(selectedContentIndex(false));
		DetailEventPage.preload();
		UserFormPage.preload();
		window.scrollTo(0, 0);
	}, [selectedContentIndex, DetailEventPage, UserFormPage]);

	const handleClose = () => {
		setIsDone(false);
		history.push("/");
	};

	return (
		<>
			{error?.response?.status === 404 || data?.data?.isEventDone ? (
				<ModalApp
					isActive={isDone}
					handleClose={handleClose}
					title="The Event Doesn't Exists"
				/>
			) : (
				<EventTemplate isLoading={isLoading} dataContent={data?.data}>
					{page ? (
						<UserFormPage dataContent={data?.data} />
					) : isLoading ? (
						<Loading />
					) : (
						<DetailEventPage
							isLoading={isLoading}
							dataContent={!isLoading && data?.data}
						/>
					)}
				</EventTemplate>
			)}
		</>
	);
};

ContentEventPage.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.oneOfType([
				PropTypes.objectOf(PropTypes.object),
				PropTypes.string,
			]),
		}),
	}).isRequired,
};

export default ContentEventPage;
