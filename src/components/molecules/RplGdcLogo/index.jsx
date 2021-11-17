import React from "react";
import {Typography} from "@material-ui/core";
// import {IconLogo} from "@assets/image";
import classNames from "classnames";
import PropTypes from "prop-types";
import RplGdcLogoStyle from "./style";

const RplGdcLogo = ({className, size}) => {
	const classes = RplGdcLogoStyle();
	const {heading, headingIcon,  headingInfo, headText, subHeadText, subHeadText2} =
		classes;

	const rootClass = classNames(className, heading);

	return (
		<div className={rootClass}>
			<div className={headingIcon}>
				{/* <img className={logo} src={IconLogo} alt="icon logo" /> */}
			</div>
			{!size && (
				<div className={headingInfo}>
					<Typography className={headText}>BRAINSPARK</Typography>
					<Typography className={
						window.location.pathname === '/dashboard' ?
							subHeadText :
							subHeadText2
					}>
						Admin
					</Typography>
				</div>
			)}
		</div>
	);
};

RplGdcLogo.propTypes = {
	className: PropTypes.string,
	size: PropTypes.bool,
};

RplGdcLogo.defaultProps = {
	className: "",
	size: false,
};

export default RplGdcLogo;
