/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
	Button as ButtonMaterial,
	Link as LinkMaterial,
} from "@material-ui/core";
import classNames from "classnames";
import PropTypes from "prop-types";
import {Link as LinkDom} from "react-router-dom";
import buttonStyle from "./style";

const Button = ({
	className,
	children,
	variant,
	disableElevation,
	onClick,
	disabled,
	color,
	isFullWidth,
	size,
	link,
	typebutton,
	...rest
}) => {
	const classes = buttonStyle();
	const {
		primary,
		secondary,
		fullWidth,
		root,
		secondaryGradient,
		transparent,
		linkButton,
	} = classes;

	const buttonColor =
		color === "primary"
			? primary
			: color === "secondary"
			? secondary
			: color === "secondary-gradient"
			? secondaryGradient
			: "";

	const buttonClassnames = classNames(className, root, buttonColor, {
		[`${fullWidth}`]: isFullWidth,
		[`${transparent}`]: variant === "transparent",
		[`${disabled}`]: disabled,
	});
	const props = {
		variant,
		disableElevation,
		onClick,
		disabled,
		size,
		...rest,
	};

	switch (typebutton) {
		case "link":
			return (
				<LinkMaterial className={linkButton} href={link}>
					<ButtonMaterial className={buttonClassnames} {...props}>
						{children}
					</ButtonMaterial>
				</LinkMaterial>
			);

		case "link-dom":
			return (
				<LinkDom to={link} className={linkButton}>
					<ButtonMaterial className={buttonClassnames} {...props}>
						{children}
					</ButtonMaterial>
				</LinkDom>
			);

		default:
			return (
				<ButtonMaterial className={buttonClassnames} {...props}>
					{children}
				</ButtonMaterial>
			);
	}
};

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	props: PropTypes.objectOf(PropTypes.object),
	variant: PropTypes.string,
	disableElevation: PropTypes.bool,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	typebutton: PropTypes.string,
	isFullWidth: PropTypes.bool,
	size: PropTypes.string,
	link: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.objectOf(PropTypes.object),
	]),
	color: PropTypes.string,
};

Button.defaultProps = {
	className: "",
	children: "",
	props: {},
	variant: "text",
	disableElevation: false,
	onClick: () => {},
	disabled: false,
	type: "",
	typebutton: "",
	isFullWidth: false,
	size: "medium",
	link: "",
	color: "",
};

export default Button;
