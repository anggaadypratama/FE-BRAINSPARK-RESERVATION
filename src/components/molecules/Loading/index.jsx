import {Backdrop, CircularProgress} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import LoadingStyle from "./style";

const Loading = ({hasBackdrop, isActive}) => {
	const classes = LoadingStyle();

	return hasBackdrop ? (
		<Backdrop className={classes.backdrop} open={isActive}>
			<CircularProgress />
		</Backdrop>
	) : (
		<div className={classes.loading}>
			<CircularProgress />
		</div>
	);
};

Loading.propTypes = {
	hasBackdrop: PropTypes.bool,
	isActive: PropTypes.bool,
};

Loading.defaultProps = {
	hasBackdrop: false,
	isActive: false,
};

export default Loading;
