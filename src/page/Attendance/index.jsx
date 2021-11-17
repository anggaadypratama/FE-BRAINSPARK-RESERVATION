import React, {useState, useEffect} from "react";
import {
	LoginBackgroundRight,
	LoginBackgroundLeft,
	// IconLogo,
} from "@assets/image";
import {Card, CircularProgress, Typography} from "@material-ui/core";

import PropTypes from "prop-types";
import {useQuery, useMutation} from "react-query";
import {useScreenSize} from "@assets";
import loadable from "@loadable/component";
import {useParams, useHistory} from "react-router";
import {
	getEventParticipantSearch,
	putEventParticipantAbsent,
	getDetailEventById,
} from "@services";
import {ModalApp, Loading} from "@components";
import AttendanceStyle from "./style";

const FormResponders = loadable(() =>
	import(/* webpackPrefetch: true */ "./section/FormResponders")
);
const SearchEmail = loadable(() =>
	import(/* webpackPrefetch: true */ "./section/SearchEmail")
);

const AttendancePage = () => {
	const screenL = useScreenSize({isMax: true, size: 950});
	const screenS = useScreenSize({isMax: true, size: 600});

	const classes = AttendanceStyle({screenL, screenS});

	const history = useHistory();

	const {id} = useParams();

	const [searchEmail, setSearchEmail] = useState("");
	const [resultSearch, setResultSearch] = useState("");
	const [stepper, setStepper] = useState(0);
	const [feedback, setFeedback] = useState("");
	const [modal, setModal] = useState(true);

	const {
		data: absenPage,
		isSuccess: absenPageSuccess,
		isLoading,
	} = useQuery(["detail", id], async () => {
		const dataFetch = await getDetailEventById(id);
		return dataFetch?.data?.id === id && dataFetch;
	});

	const isAbsent = absenPage?.data?.isAbsentActive;

	const {data, isLoading: emailLoading} = useQuery(
		["fetchUsername", searchEmail],
		() =>
			getEventParticipantSearch(`${id}/absent/validate/`, {email: searchEmail})
	);

	const mutation = useMutation(props =>
		putEventParticipantAbsent(`${id}/absent`, props)
	);

	useEffect(() => {
		setResultSearch(data);
	}, [data]);

	useEffect(() => {
		FormResponders.preload();
		SearchEmail.preload();
	});

	const handleChange = e => {
		setSearchEmail(e.target.value);
	};

	const handleClose = () => {
		setModal(false);
		history.push("/");
	};

	const TitleForm = ({title, subtitle, helperText}) => (
		<>
			<div className={classes.titleFormWrapper}>
				<Typography className={classes.titleForm}>{title}</Typography>
				<span className={classes.subtitleForm}>
					<i>{subtitle}</i>
				</span>
			</div>
			<Typography className={classes.helperText}>
				<i>{helperText}</i>
			</Typography>
		</>
	);

	TitleForm.propTypes = {
		title: PropTypes.string,
		subtitle: PropTypes.string,
		helperText: PropTypes.string,
	};

	TitleForm.defaultProps = {
		title: "",
		subtitle: "",
		helperText: "",
	};

	const nextStep = () => {
		mutation.mutate({email: searchEmail, feedback});
		setStepper(prev => prev + 1);
	};

	return isLoading ? (
		<Loading hasBackdrop isActive={isLoading} />
	) : (
		<>
			{absenPageSuccess && isAbsent && (
				<div className={classes.root}>
					<div className={classes.wave}>
						{!screenS && (
							<>
								<img
									src={LoginBackgroundRight}
									className={classes.waveRight}
									alt="wave right"
								/>
								<img
									src={LoginBackgroundLeft}
									className={classes.waveLeft}
									alt="wave left"
								/>
							</>
						)}
					</div>
					<div className={classes.content}>
						<Card className={classes.cardContent} elevation={screenS ? 0 : 3}>
							{stepper !== 1 && (
								<div className={classes.header}>
									{/* <img
										className={classes.logo}
										src={IconLogo}
										alt="logo-rplgdc"
									/> */}
									<div className={classes.titleWrapper}>
										<Typography className={classes.title}>
											Give Feedback
										</Typography>
										<Typography className={classes.subtitle}>
											Beri kami pendapat anda tentang acara ini
										</Typography>
									</div>
								</div>
							)}
							{stepper === 1 && (
								<>
									{mutation.isLoading ? (
										<div className={classes.loadingWrapper}>
											<CircularProgress />
										</div>
									) : (
										<div className={classes.greetingWrapper}>
											<div className={classes.logoWrapper}>
												{/* <img
													className={classes.logoSecond}
													src={IconLogo}
													alt="logo-rplgdc"
												/> */}
												<Typography className={classes.titleLogo}>
													BRAINSPARK
												</Typography>
											</div>
											<Typography className={classes.message}>
												{mutation.isError &&
												mutation.error?.response?.status === 409
													? "Anda telah melakukan absensi sebelumnya"
													: '"Terimakasih atas partisipasi anda mengikuti acara Lab kami, kami sangat menghargai pendapat anda"'}
											</Typography>
										</div>
									)}
								</>
							)}

							<section className={classes.mainContent}>
								{stepper === 0 ? (
									<>
										<SearchEmail
											result={resultSearch}
											handleChange={handleChange}
											value={searchEmail}
											searchLoading={emailLoading}
											Title={
												<TitleForm
													title="Alamat Email"
													subtitle="(Email Address)"
													helperText="*(Masukan email yang sama dengan saat anda registrasi)"
												/>
											}
										/>
										<FormResponders
											result={resultSearch}
											value={searchEmail}
											handleNext={nextStep}
											messageResponse={e => setFeedback(e)}
											Title={
												<TitleForm
													title="Pesan & Kesan"
													subtitle="(Message & Impression)"
												/>
											}
										/>
									</>
								) : (
									""
								)}
							</section>
							{screenS && (
								<>
									<img
										src={LoginBackgroundRight}
										className={classes.waveRightCard}
										alt="wave right"
									/>
									<img
										src={LoginBackgroundLeft}
										className={classes.waveLeftCard}
										alt="wave left"
									/>
								</>
							)}
						</Card>
					</div>
				</div>
			)}

			{!isAbsent && (
				<ModalApp
					isActive={modal}
					handleClose={handleClose}
					title="Cannot access this page"
				/>
			)}
		</>
	);
};

export default AttendancePage;
