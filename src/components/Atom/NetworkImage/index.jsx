import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {ImageNotFound} from "@assets/image";
import NetworkImageStyle from "./style";

const NetworkImage = ({src, alt, className, onErrorImage}) => {
	const [imageSrc, setImageSrc] = useState(src);

	const classes = NetworkImageStyle();

	const imageClassname = classNames(className, classes.image);

	const imageError = () => setImageSrc(onErrorImage);

	return (
		<img
			loading="lazy"
			width="1000"
			height="1000"
			srcSet={imageSrc || onErrorImage}
			alt={alt}
			className={imageClassname}
			onError={imageError}
		/>
	);
};

NetworkImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	onErrorImage: PropTypes.string,
};

NetworkImage.defaultProps = {
	className: "",
	onErrorImage: ImageNotFound,
};

export default NetworkImage;
