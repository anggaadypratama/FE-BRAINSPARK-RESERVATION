import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {ImageNotFound} from "@assets/image";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import NetworkImageStyle from "./style";
import "./style.css";

const NetworkImage = ({src, alt, className}) => {
	const classes = NetworkImageStyle();

	const imageClassname = classNames(className, classes.image);

	return (
		<LazyLoadImage
			alt={alt}
			visibleByDefault
			threshold={60}
			effect="blur"
			src={src}
			width="100%"
			height="auto"
			placeholderSrc={ImageNotFound}
			placeholder="div"
			wrapperClassName={imageClassname}
			loading="lazy"
		/>
	);
};

NetworkImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
};

NetworkImage.defaultProps = {
	className: "",
};

export default NetworkImage;
