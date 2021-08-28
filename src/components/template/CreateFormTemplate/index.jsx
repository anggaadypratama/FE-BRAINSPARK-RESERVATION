// eslint-disable-next-line no-unused-vars
import {CircularProgress, Divider, Typography} from "@material-ui/core";
import React, {useCallback, useState, useEffect} from "react";
import {InputFormAdmin, Button, ModalApp} from "@components";
import Fade from "react-reveal/Fade";
import {MUIEditorState, toHTML} from "react-mui-draft-wysiwyg";
import moment from "moment-timezone";
import PropTypes from "prop-types";
import {crudValidation} from "@helpers/yup";
import {Alert, AlertTitle} from "@material-ui/lab";
import {nanoid} from "nanoid";
import {ContentState, convertFromHTML, EditorState} from "draft-js";
import imageCompression from "browser-image-compression";

import {useSelector} from "react-redux";
import CreateFormStyle from "./style";

import {participantCategory, locationType} from "./data";

// eslint-disable-next-line no-unused-vars
const CreateFormTemplate = ({handleSubmitForm, defaultData, refetch}) => {
	const classes = CreateFormStyle();

	const editorConfig = {
		editor: {
			wrapperElement: "div",
			className: classes.textEditor,
		},
		toolbar: {
			className: classes.toolbarEditor,
		},
	};

	const loading = useSelector(
		({dashboardPage}) => dashboardPage.loadingProgress
	);

	useEffect(() => {
		refetch();
	}, [refetch]);

	const convertHTML = data => {
		if (data) {
			const blocksFromHTML = convertFromHTML(data);
			const content = ContentState.createFromBlockArray(
				blocksFromHTML.contentBlocks,
				blocksFromHTML.entityMap
			);

			return EditorState.createWithContent(content);
		}

		return false;
	};

	const descState = convertHTML(defaultData?.description);
	const noteState = convertHTML(defaultData?.note);

	const [errorForm, setErrorForm] = useState(null);
	const [isCopy, setCopy] = useState(false);
	const [form, setForm] = useState({
		themeName: defaultData ? defaultData?.themeName : "",
		imagePoster:
			defaultData && defaultData?.imagePoster !== null
				? defaultData.imagePoster
				: null,
		description: defaultData
			? descState
			: MUIEditorState.createEmpty(editorConfig),
		date: defaultData ? moment(defaultData?.date).format() : moment().format(),
		eventStart: defaultData
			? moment(defaultData?.eventStart).format()
			: moment().format(),
		eventEnd: defaultData
			? moment(defaultData?.eventEnd).format()
			: moment().format(),
		isLinkLocation: !!defaultData?.linkLocation,
		speakerName: defaultData ? defaultData?.speakerName : "",
		location: defaultData ? defaultData?.location : "",
		linkLocation: defaultData ? defaultData?.linkLocation : "",
		endRegistration: defaultData
			? moment(defaultData?.endRegistration).format()
			: moment().format(),
		isOnlyTelkom: defaultData
			? {isOnlyTelkom: !!defaultData?.isOnlyTelkom}
			: null,
		ticketLimit: defaultData ? defaultData?.ticketLimit : "",
		note: defaultData ? noteState : MUIEditorState.createEmpty(editorConfig),
		isAbsentActive: defaultData && defaultData?.isAbsentActive,
	});

	const handleInputChange = useCallback(
		(val, type) => e => {
			setErrorForm(null);
			if (["checkbox", "radio", "text"].includes(type)) {
				if (val === "isOnlyTelkom") {
					setForm({
						...form,
						isOnlyTelkom: {
							isOnlyTelkom: e.target.value === "telyu",
						},
					});
				} else if (val === "isLinkLocation") {
					setForm({
						...form,
						isLinkLocation: e.target.value === "online",
					});
				} else {
					setForm({...form, [val]: e.target.value});
				}
			} else if (type === "file") {
				setForm({...form, [val]: e.target.files[0]});
			} else if (type === "switch") {
				setForm({...form, [val]: e.target.checked});
			} else {
				setForm({...form, [val]: e});
			}
		},
		[form]
	);

	const handleSubmit = async e => {
		e.preventDefault();

		const {
			eventEnd: end,
			eventStart: start,
			date,
			endRegistration: endReg,
			imagePoster,
			...dataForm
		} = form;

		const compressImage = await imageCompression(imagePoster, {
			maxSizeMB: 0.5,
			maxWidthOrHeight: 1000,
			useWebWorker: true,
		});

		const dateS = moment(date).tz("Asia/Jakarta").format().split("T");
		const eventE = moment(end).tz("Asia/Jakarta").format().split("T");
		const eventS = moment(start).tz("Asia/Jakarta").format().split("T");
		const endR = moment(endReg).tz("Asia/Jakarta").format().split("T");

		const eventStart = new Date(`${dateS[0]}T${eventS[1]}`);
		const eventEnd = new Date(`${dateS[0]}T${eventE[1]}`);
		const endRegistration = new Date(`${endR[0]}T${eventS[1]}`);

		const datas = {
			imagePoster: compressImage,
			eventEnd,
			eventStart,
			date,
			endRegistration,
			...dataForm,
		};

		const resultCheck = await crudValidation
			.validate(datas, {abortEarly: false})
			.catch(({errors}) => {
				setErrorForm(errors);
			});

		if (resultCheck) {
			const {isLinkLocation, ...resultData} = resultCheck;

			const formData = new FormData();
			Object.keys(resultData).forEach(key => {
				const data = ["description", "note"].includes(key)
					? toHTML(resultData[key].getCurrentContent())
					: key === "isOnlyTelkom"
					? JSON.stringify(resultData[key])
					: resultData[key];
				return formData.append(key, data);
			});

			setErrorForm(null);
			handleSubmitForm(formData);
		}
	};

	const handleCopy = () => {
		if (navigator.clipboard && window.isSecureContext) {
			return navigator.clipboard
				.writeText(
					`${window.location.protocol}//${window.location.host}/attendance/${defaultData?.id}`
				)
				.then(() => {
					setCopy(true);
				});
		}
		return false;
	};

	const handleCloseCopy = () => {
		setCopy(false);
	};

	return (
		<>
			<ModalApp
				isActive={isCopy}
				handleClose={handleCloseCopy}
				title="Link Copied"
			/>
			<div className={classes.root}>
				<form onSubmit={handleSubmit}>
					<div className={classes.formWrapper}>
						<Typography variant="h6">Event Information</Typography>
						<InputFormAdmin
							title="1. Input event theme"
							fullWidth
							multiline
							id="theme"
							name="themeName"
							value={form.themeName}
							onChange={handleInputChange("themeName", "text")}
						/>
						<InputFormAdmin
							title="2. Input event description"
							type="file"
							color="primary"
							variant="contained"
							size="small"
							value={form.imagePoster}
							onChange={handleInputChange("imagePoster", "file")}
							label="upload"
						/>

						<InputFormAdmin
							title="3. Input event description"
							type="editor"
							value={form.description}
							onChange={handleInputChange("description")}
						/>
						<Typography variant="h6">Event Information Details</Typography>
						<InputFormAdmin
							title="4. Input event date"
							variant="inline"
							type="date"
							id="date"
							name="date"
							TimeOrDateInput
							format="DD/MM/yyyy"
							inputVariant="outlined"
							value={form.date}
							onChange={handleInputChange("date")}
						/>
						<div className={classes.time}>
							<Typography>5. Input event time</Typography>
							<div className={classes.timeWrapper}>
								<InputFormAdmin
									className={classes.timeInput}
									variant="inline"
									title="Event start"
									type="time"
									TimeOrDateInput
									inputVariant="outlined"
									value={form.eventStart}
									onChange={handleInputChange("eventStart")}
								/>
								<InputFormAdmin
									className={classes.timeInput}
									variant="inline"
									title="Event end"
									type="time"
									TimeOrDateInput
									inputVariant="outlined"
									value={form.eventEnd}
									onChange={handleInputChange("eventEnd")}
								/>
							</div>
						</div>
						<InputFormAdmin
							label="6. Event location"
							data={locationType}
							type="radio"
							inputlabelprops={{
								shrink: true,
							}}
							id="standard-full-width"
							checked={form.isLinkLocation ? "online" : "outsite"}
							onChange={handleInputChange("isLinkLocation", "radio")}
						/>
						<div className={classes.locationWrapper}>
							{typeof form.isLinkLocation === "boolean" && (
								<>
									<InputFormAdmin
										title="Place"
										placeholder="Gedung Arwana..."
										fullWidth
										value={form.location}
										onChange={handleInputChange("location", "text")}
									/>
									<Fade collapse when={form.isLinkLocation}>
										<InputFormAdmin
											title="Link"
											placeholder="www.meet.google.com..."
											fullWidth
											value={form.linkLocation}
											onChange={handleInputChange("linkLocation", "text")}
										/>
									</Fade>
								</>
							)}
						</div>
						<InputFormAdmin
							title="7. Input speaker name"
							fullWidth
							value={form.speakerName}
							onChange={handleInputChange("speakerName", "text")}
						/>
						<InputFormAdmin
							label="8. Select participant category"
							data={participantCategory}
							type="radio"
							inputlabelprops={{
								shrink: true,
							}}
							id="standard-full-width"
							checked={form.isOnlyTelkom.isOnlyTelkom ? "telyu" : "gp"}
							onChange={handleInputChange("isOnlyTelkom", "radio")}
						/>
						<InputFormAdmin
							title="9. Registration Deadline"
							variant="inline"
							type="date"
							TimeOrDateInput
							format="DD/MM/yyyy"
							inputVariant="outlined"
							value={form.endRegistration}
							onChange={handleInputChange("endRegistration")}
						/>
						<InputFormAdmin
							title="10. Ticket registration limit"
							fullWidth
							inputType="number"
							value={form.ticketLimit}
							onChange={handleInputChange("ticketLimit", "text")}
						/>
						<InputFormAdmin
							title="11. Note To Participant"
							type="editor"
							value={form.note}
							onChange={handleInputChange("note")}
						/>
						{!(defaultData && Object.keys(defaultData).length === 0) && (
							<>
								<Divider />
								<InputFormAdmin
									title="12. Absent"
									type="switch"
									value={form.isAbsentActive}
									onChange={handleInputChange("isAbsentActive", "switch")}
								/>
							</>
						)}
						{!(Object.keys(defaultData).length < 1) && (
							<div className={classes.attendanceLink}>
								<Fade collapse when={form.isAbsentActive}>
									<InputFormAdmin
										fullWidth
										title="Attendance Link"
										buttonTitle="Copy"
										type="copy"
										link={`${window.location.protocol}//${window.location.host}/attendance/${defaultData?.id}`}
										onClick={handleCopy}
										InputProps={{
											readOnly: true,
										}}
									/>
								</Fade>
							</div>
						)}

						{errorForm && (
							<Alert
								classes={{root: classes.alert}}
								severity="error"
								variant="filled"
							>
								<AlertTitle>Error</AlertTitle>
								<ul>
									{errorForm?.map(val => (
										<li key={nanoid()}>
											<Typography key={nanoid()}>{val}</Typography>
										</li>
									))}
								</ul>
							</Alert>
						)}
					</div>

					<div className={classes.buttonWrapper}>
						<Button color="primary" type="submit">
							{loading > 0 && loading <= 100 ? (
								<CircularProgress
									size={25}
									classes={{root: classes.circle}}
									color="secondary"
								/>
							) : Object.keys(defaultData).length ? (
								"Update"
							) : (
								"Upload"
							)}
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

CreateFormTemplate.propTypes = {
	defaultData: PropTypes.objectOf(PropTypes.object),
	handleSubmitForm: PropTypes.func.isRequired,
	refetch: PropTypes.func,
};

CreateFormTemplate.defaultProps = {
	defaultData: {},
	refetch: () => {},
};

export default CreateFormTemplate;
