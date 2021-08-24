import React from "react";
import {CardHeader, Avatar, IconButton} from "@material-ui/core";
import {Share} from "@material-ui/icons";
import PropTypes from "prop-types";
import {Skeleton} from "@material-ui/lab";
import HeaderStyle from "./style";

const Header = ({speaker, isLoading}) => {
	const classes = HeaderStyle();
	return (
		<CardHeader
			avatar={
				<Avatar aria-label="recipe" className={classes.avatar}>
					{isLoading ? "?" : speaker[0]}
				</Avatar>
			}
			action={
				<IconButton aria-label="settings">
					<Share />
				</IconButton>
			}
			title={isLoading ? <Skeleton /> : speaker}
			subheader="Speaker"
		/>
	);
};

Header.propTypes = {
	speaker: PropTypes.string,
	isLoading: PropTypes.bool,
};

Header.defaultProps = {
	speaker: "",
	isLoading: false,
};

export default Header;
