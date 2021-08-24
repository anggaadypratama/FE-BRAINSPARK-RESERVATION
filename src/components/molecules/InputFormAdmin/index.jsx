import {Button, Input} from "@components/Atom";
import {Typography, Paper} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import InputFormAdminStyle from "./style";

const InputFormAdmin = ({title, type, className, error, link, ...rest}) => {
	const classes = InputFormAdminStyle();
	const classInputWrapper = classNames(className, classes.root);
	const classCopyButton = classNames(
		classes.inputFileWrapper,
		classes.copyButton
	);

	const fileName =
		rest.value?.name?.length > 15
			? `${rest.value?.name?.substring(0, 15)}... ${rest.value?.name?.substring(
					rest.value?.name?.length - 4,
					rest.value?.name?.length
			  )}`
			: rest.value?.name;

	return (
		<div className={classInputWrapper}>
			<Typography>{title}</Typography>
			{type === "file" ? (
				<Paper variant="outlined" className={classes.inputFileWrapper}>
					<Input variant="outlined" error={error} inputType={type} {...rest} />
					<Typography className={classes.nameFile}>
						{fileName || "File Not Found"}
					</Typography>
				</Paper>
			) : type === "copy" ? (
				<Paper variant="outlined" className={classCopyButton}>
					<Button type="button" color="primary" onClick={rest.onClick}>
						{rest.buttonTitle}
					</Button>
					<Typography className={classes.nameFile}>{link}</Typography>
				</Paper>
			) : (
				<Input variant="outlined" error={error} inputType={type} {...rest} />
			)}
		</div>
	);
};

InputFormAdmin.propTypes = {
	title: PropTypes.node,
	type: PropTypes.string,
	className: PropTypes.string,
	link: PropTypes.string,
	error: PropTypes.bool,
};

InputFormAdmin.defaultProps = {
	title: "",
	type: "",
	className: "",
	link: "",
	error: false,
};

export default InputFormAdmin;
