/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, {memo} from "react";
import {Typography} from "@material-ui/core";
import {NetworkImage} from "@components";

import {Skeleton} from "@material-ui/lab";
import  useScreenSize  from '@assets/breakpoints';
import DetailEventStyle from "./style";

const DetailEventPageM = ({dataContent, isLoading}) => {
	const isMedium = useScreenSize({isMax: true, size: 900})

	const classes = DetailEventStyle({isMedium});
	const {description = {}, imagePoster = ""} = dataContent;


	return (
		<>
			<NetworkImage
				src={imagePoster}
				className={classes.contentBanner}
				alt="content"
			/>
			<div className={classes.contentDescWrapper}>
				{isLoading ? (
					<div className={classes.SkeletonWrapper}>
						<Skeleton height={isMedium ? 16 : 20} width={600} />
						<Skeleton height={isMedium ? 16 : 20} width={600} />
						<Skeleton height={isMedium ? 16 : 20} width={600} />
						<Skeleton height={isMedium ? 16 : 20} width={600} />
						<Skeleton height={isMedium ? 16 : 20} width={600} />
						<Skeleton height={isMedium ? 16 : 20} width={600} />
						<Skeleton height={isMedium ? 16 : 20} width={600} />
						<Skeleton height={isMedium ? 16 : 20} width={600} />
					</div>
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
