import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {ImageNotFound} from "@assets/image";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {Skeleton} from "@material-ui/lab";
import NetworkImageStyle from "./style";
import "./style.css";

const NetworkImage = ({src, alt, className}) => {
	const classes = NetworkImageStyle();
	const [waitImage, setWaitImage] = useState(null);

	const imageClassname = classNames(className, classes.image);

	const loadImage = srcs =>
		new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => resolve(img);
			img.onerror = reject;
			img.src = srcs;
		});

	loadImage(src).then(image => setWaitImage(image.complete));

	return !waitImage ? (
		<Skeleton
			animation="wave"
			classes={{root: classes.imageWrapper}}
			variant="rect"
			height={350}
		/>
	) : (
		<LazyLoadImage
			alt={alt}
			visibleByDefault
			threshold={0}
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
