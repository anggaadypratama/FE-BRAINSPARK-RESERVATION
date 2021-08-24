import React from "react";
import {Navbar, Footer} from "@components";
// import GeneralUserStyle from './style';
import PropTypes from "prop-types";

const GeneralUserTemplate = ({children, ...rest}) => (
	<>
		<Navbar {...rest} />
		{children}
		<Footer />
	</>
);

GeneralUserTemplate.propTypes = {
	children: PropTypes.node,
};

GeneralUserTemplate.defaultProps = {
	children: "",
};

export default GeneralUserTemplate;
