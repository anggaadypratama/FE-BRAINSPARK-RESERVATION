/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, {memo} from "react";
import {Typography} from "@material-ui/core";
import {NetworkImage} from "@components";

import {Skeleton} from "@material-ui/lab";
import DetailEventStyle from "./style";

const DetailEventPageM = ({dataContent, isLoading}) => {
	const classes = DetailEventStyle();
	const {description = {}, imagePoster = ""} = dataContent;

	return (
		<>
			{isLoading && imagePoster.length ? (
				<Skeleton height={813} width={813} variant="rect" />
			) : (
				<NetworkImage
					src={imagePoster}
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

const areEqual = (prev, next) =>
	prev?.dataContent?.imagePoster === next?.dataContent?.imagePoster &&
	prev?.dataContent?.description === next?.dataContent?.description;

const DetailEventPage = memo(DetailEventPageM, areEqual);

export default DetailEventPage;
