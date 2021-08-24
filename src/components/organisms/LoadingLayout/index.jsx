import {Backdrop, CircularProgress} from "@material-ui/core";
import React from "react";

const LoadingLayout = () => (
	<Backdrop>
		<CircularProgress color="inherit" />
	</Backdrop>
);

export default LoadingLayout;
