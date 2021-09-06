import {
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Switch,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	TextField,
} from "@material-ui/core";
import MUIEditor, {LANG_PREFIX, MUIEditorState, toolbarControlTypes} from "react-mui-draft-wysiwyg";
import React from "react";
import PropTypes from "prop-types";
import MomentUtils from "@date-io/moment";
import {nanoid} from "nanoid";
import {
	DatePicker,
	KeyboardDatePicker,
	KeyboardTimePicker,
	MuiPickersUtilsProvider,
	TimePicker,
} from "@material-ui/pickers";
import {CheckBox} from "@material-ui/icons";
import {Button} from "@components";
import InputStyle from "./style";

const Input = ({
	inputType,
	error,
	data,
	placeholder,
	label,
	TimeOrDateInput,
	accept,
	onChange,
	value,
	checked,
	...rest
}) => {
	const classes = InputStyle();

	const richEditorConfig = {
		editor: {
			wrapperElement: "div",
			className: classes.textEditor,
		},
		toolbar: {
			visible: true,
			className: classes.toolbarEditor,
			controls: [
				toolbarControlTypes.bold,
				toolbarControlTypes.italic,
				toolbarControlTypes.underline,
				toolbarControlTypes.strikethrough,
				toolbarControlTypes.divider,
				toolbarControlTypes.linkAdd,
				toolbarControlTypes.linkRemove,
				toolbarControlTypes.divider,
				toolbarControlTypes.textAlign,
				toolbarControlTypes.divider,
				toolbarControlTypes.blockType,
				toolbarControlTypes.divider,
				toolbarControlTypes.unorderedList,
				toolbarControlTypes.orderedList,

			],
			controlsConfig: {
				blockType: {
					options: [
						{
							value: 'default',
							text: `${LANG_PREFIX}controls.blockType.labels.normal`,
						  },
						  {
							value: 'header-one',
							text: `${LANG_PREFIX}controls.blockType.labels.header1`,
						  },
						  {
							value: 'header-two',
							text: `${LANG_PREFIX}controls.blockType.labels.header2`,
						  },
						  {
							value: 'header-three',
							text: `${LANG_PREFIX}controls.blockType.labels.header3`,
						  },
						  {
							value: 'blockquote',
							text: 'Quote',
						  },
					]
				},
				fontSize: {
					options: [
						'default',
						'12px',
						'14px',
						'18px',
						'24px',
						'30px',
					],
				},
			}
		},
	};

	switch (inputType) {
		case "select":
			return (
				<FormControl className={classes.root}>
					<InputLabel id="select-label">{label}</InputLabel>
					<Select
						labelId="select-label"
						id="simple-select"
						className={classes.root}
						{...rest}
					>
						{data?.map(val => (
							<MenuItem key={nanoid()} value={val.value}>
								{val.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			);
		case "date":
			return (
				<MuiPickersUtilsProvider utils={MomentUtils}>
					{TimeOrDateInput ? (
						<KeyboardDatePicker
							className={classes.root}
							value={value}
							onChange={onChange}
							{...rest}
							label={label}
						/>
					) : (
						<DatePicker
							className={classes.root}
							value={value}
							onChange={onChange}
							{...rest}
							label={label}
						/>
					)}
				</MuiPickersUtilsProvider>
			);
		case "time":
			return (
				<MuiPickersUtilsProvider utils={MomentUtils}>
					{TimeOrDateInput ? (
						<KeyboardTimePicker
							className={classes.root}
							ampm={false}
							placeholder="08:00"
							mask="__:__"
							{...rest}
							label={label}
							value={value}
							onChange={onChange}
						/>
					) : (
						<TimePicker
							ampm={false}
							className={classes.root}
							{...rest}
							label={label}
							value={value}
							onChange={onChange}
						/>
					)}
				</MuiPickersUtilsProvider>
			);

		case "switch": {
			return (
				<FormGroup>
					<FormControlLabel
						control={
							<Switch
								checked={value}
								onChange={onChange}
								name={label}
								color="primary"
							/>
						}
						label={label}
					/>
				</FormGroup>
			);
		}
		case "radio":
			return (
				<FormControl
					error={error}
					component="fieldset"
					className={classes.root}
				>
					{label ?? (
						<FormLabel
							color="secondary"
							classes={{root: classes.label, label: classes.label}}
						>
							{label}
						</FormLabel>
					)}
					<RadioGroup value={checked} onChange={onChange} {...rest}>
						{data?.map(val => (
							<FormControlLabel
								key={nanoid()}
								value={val.value}
								control={
									<Radio
										onChange={onChange}
										classes={{root: classes.input, checked: classes.checked}}
									/>
								}
								label={val.name}
							/>
						))}
					</RadioGroup>
				</FormControl>
			);
		case "checkbox":
			return (
				<FormGroup row>
					{data?.map(val => {
						val.name ||= "";

						return (
							<FormControlLabel
								key={nanoid()}
								classes={{label: classes.checkboxLabel}}
								control={<CheckBox {...rest} name={val.name} color="primary" />}
								label={val.name}
							/>
						);
					})}
				</FormGroup>
			);
		case "editor": {
			return (
				<MUIEditor
					onChange={onChange}
					value={value}
					config={richEditorConfig}
					editorState={value || MUIEditorState.createEmpty(richEditorConfig)}
					{...rest}
				/>
			);
		}

		case "file": {
			return (
				<>
					<input
						accept={accept}
						className={classes.file}
						id="contained-button-file"
						multiple
						hidden
						onChange={onChange}
						type="file"
					/>
					<label htmlFor="contained-button-file">
						<Button {...rest} component="span">
							{label}
						</Button>
					</label>
				</>
			);
		}
		default:
			return (
				<TextField
					error={error}
					className={classes.root}
					placeholder={placeholder}
					label={label}
					type={inputType}
					value={value}
					onChange={onChange}
					color="primary"
					{...rest}
				/>
			);
	}
};

Input.propTypes = {
	error: PropTypes.bool,
	inputType: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.object, PropTypes.string])
	),
	TimeOrDateInput: PropTypes.bool,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	accept: PropTypes.string,
	onChange: PropTypes.func,
	checked: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.number,
		PropTypes.string,
		PropTypes.node,
	]),
};

Input.defaultProps = {
	error: false,
	inputType: "",
	data: [],
	TimeOrDateInput: false,
	placeholder: "",
	label: "",
	accept: "image/*",
	onChange: () => {},
	value: "",
	checked: "",
};

export default Input;
