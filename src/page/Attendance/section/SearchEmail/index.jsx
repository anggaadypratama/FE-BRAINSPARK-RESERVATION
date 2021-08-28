import React from "react";
import {InputFormAdmin} from "@components";
import PropTypes from "prop-types";
import {CircularProgress} from "@material-ui/core";
import SearchEmailStyle from "./style";

const SearchEmail = ({result, handleChange, value, Title, searchLoading}) => {
	const classes = SearchEmailStyle();

	return (
		<div className={classes.root}>
			<InputFormAdmin
				error={value.length > 0 && result?.status !== 200}
				fullWidth
				label=""
				helperText={
					value.length > 0 && result?.status !== 200 && "Email tidak ditemukan"
				}
				value={value}
				onChange={handleChange}
				title={Title}
				InputProps={{
					endAdornment: value.length > 0 && searchLoading && (
						<CircularProgress size={25} />
					),
				}}
			/>
		</div>
	);
};

SearchEmail.propTypes = {
	result: PropTypes.oneOfType([
		PropTypes.objectOf(PropTypes.object),
		PropTypes.number,
		PropTypes.string,
	]),
	value: PropTypes.string,
	handleChange: PropTypes.func,
	Title: PropTypes.node,
	searchLoading: PropTypes.bool,
};

SearchEmail.defaultProps = {
	result: undefined,
	value: "",
	handleChange: () => {},
	Title: "",
	searchLoading: false,
};

export default SearchEmail;
