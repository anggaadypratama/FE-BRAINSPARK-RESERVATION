/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from "react";
import {Typography} from "@material-ui/core";

import CONFIG from "@config";

import {NetworkImage} from "@components";

import {Skeleton} from "@material-ui/lab";
import DetailEventStyle from "./style";

const DetailEventPage = ({dataContent, isLoading}) => {
	const classes = DetailEventStyle();
	const {description = {}, imagePoster = ""} = dataContent;


	return (
		<>
			{isLoading && imagePoster.length ? (
				<Skeleton height={813} width={813} variant="rect" />
			) : (
				<NetworkImage
					src={`${CONFIG.API_URL}/${imagePoster}`}
					className={classes.contentBanner}
					alt="content"
				/>
			)}
			<div className={classes.contentDescWrapper}>
				{isLoading && description.length ? (
					<>
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</>
				) : (
					<Typography
						className={classes.contentDesc}
						dangerouslySetInnerHTML={{__html: description}}
					/>
				)}
			</div>
		</>
	);
};
export default DetailEventPage;
