/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import React from "react";
import classNames from "classnames";

import {Container, Typography} from "@material-ui/core";
import {ListCard, GeneralUserTemplate} from "@components";
import useScreenSize from "@assets/breakpoints";
import {withRouter} from "react-router-dom";

import {useQuery} from "react-query";

import {getAllEvent} from "@services";
import ListEventStyle from "./style";

const ListEventPage = () => {
	const screenSize = useScreenSize({isMax: true, size: 768});
	const classes = ListEventStyle(screenSize);
	const backdropClassNames = classNames(classes.waveBackdrop);
	const waveJumbotronClassNames = classNames(classes.waveJumbotron);

	// eslint-disable-next-line no-console
	const {data, isLoading} = useQuery("event", () =>
		getAllEvent({isFinished: 2})
	);

	return (
		<>
			<GeneralUserTemplate color="transparent">
				<div className={backdropClassNames}>
					<div className={classes.titlePosition}>
						{screenSize ? (
							<section>
								<Typography variant="h3" className={classes.title}>
									BRAINSPARK
								</Typography>
							</section>
						) : (
							<Typography variant="h1" className={classes.title}>
								BRAINSPARK
							</Typography>
						)}
					</div>
					<div className={waveJumbotronClassNames} />
				</div>
				<Container maxWidth="lg">
					<Typography variant="h5" className={classes.titleEvent}>
						Upcoming Event
					</Typography>
					<ListCard
						loading={!isLoading}
						cardData={data?.data}
						md={4}
						sm={6}
						xs={12}
						isLoading={isLoading}
					/>
				</Container>
			</GeneralUserTemplate>
		</>
	);
};

export default withRouter(ListEventPage);
