import React from "react";
import {Typography, Card, Divider} from "@material-ui/core";
import Fade from "react-reveal/Fade";
import classNames from "classnames";
import {Button} from "@components";
import useScreenSize from "@assets/breakpoints";
import {PropTypes} from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {selectedContentIndex} from "@services/redux/slices/contentPage";
import moment from "moment";
import {Skeleton} from "@material-ui/lab";
import infoStyle from "./style";

const Info = ({position, dataContent, isLoading}) => {
	const isMedium = useScreenSize({isMax: true, size: 900});
	const classes = infoStyle({
		isMedium,
		position: position === "sticky",
	});
	const infoClassnames = classNames(
		isMedium ? classes.infoMobile : classes.info
	);

	const dispatch = useDispatch();
	const page = useSelector(({contentPage}) => contentPage.contentPageIndex);

	const handleButton = () => {
		dispatch(selectedContentIndex());
		window.scrollTo(0, 0);
	};

	const locationStatus =
		dataContent?.linkLocation?.length < 1 ||
		[undefined, null].includes(dataContent?.linkLocation)
			? "Outsite"
			: "Online";
	const isTelkom = dataContent?.isOnlyTelkom ? "Telkom Student" : "Public";

	const isRegistrationClosed =
		dataContent?.totalParticipant < dataContent?.ticketLimit &&
		!(moment(dataContent?.endRegistration).format() <= moment().format());

	const time = value => moment(value).format("HH:mm");

	return (
		<aside className={infoClassnames}>
			<Card className={classes.cardInfo}>
				<div className={classes.commonInfo}>
					<div>
						<Typography className={classes.titleInfo}>Time and Date</Typography>
						<Typography className={classes.textInfo}>
							{isLoading ? (
								<Skeleton />
							) : (
								moment(dataContent?.date).format("dddd, D MMMM YYYY")
							)}
						</Typography>
						<Typography className={classes.textInfo}>
							{isLoading ? (
								<Skeleton />
							) : (
								`${time(dataContent?.eventStart)} - ${time(
									dataContent?.eventEnd
								)} WIB`
							)}
						</Typography>
					</div>
					<div>
						<Typography className={classes.titleInfo}>
							Location{" "}
							{isLoading ? <Skeleton width="30%" /> : <>({locationStatus})</>}
						</Typography>
						<Typography className={classes.textInfo}>
							{isLoading ? <Skeleton /> : dataContent?.location}
						</Typography>
					</div>
					<div>
						<Typography className={classes.titleInfo}>
							For{" "}
							<span className={classes.textInfo}>
								{isLoading ? <Skeleton /> : isTelkom}
							</span>
						</Typography>
					</div>
				</div>
				<Divider />

				<div className={classes.registerInfo}>
					{isRegistrationClosed ? (
						<Fade bottom cascade collapse when={!page}>
							<div>
								<Typography className={classes.registerTitle}>
									Ticket{" "}
									<span className={classes.registerTextInfo}>
										{isLoading ? <Skeleton /> : dataContent?.totalParticipant}/
										{dataContent?.ticketLimit}
									</span>
								</Typography>
							</div>
							<div className={classes.registerUntil}>
								<Typography className={classes.registerTitle}>
									Registration Until
								</Typography>
								<Typography className={classes.registerTextInfo}>
									{isLoading ? (
										<Skeleton />
									) : (
										moment(dataContent?.endRegistration).format("D MMMM YYYY")
									)}
								</Typography>
							</div>
						</Fade>
					) : (
						<Typography className={classes.registerTitle}>
							Registration Closed
						</Typography>
					)}
				</div>

				{isRegistrationClosed && (
					<Button color="primary" onClick={handleButton} isFullWidth>
						{!page ? "Register" : "Kembali"}
					</Button>
				)}
			</Card>
		</aside>
	);
};

Info.propTypes = {
	position: PropTypes.string,
	dataContent: PropTypes.oneOfType([
		PropTypes.objectOf(PropTypes.object),
		PropTypes.string,
	]).isRequired,
	isLoading: PropTypes.bool,
};

Info.defaultProps = {
	position: "",
	isLoading: false,
};

export default Info;
