import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {ImageNotFound} from "@assets/image";
import NetworkImageStyle from "./style";

const NetworkImage = ({src, alt, className, onErrorImage}) => {
	const [imageSrc, setImageSrc] = useState(onErrorImage);
	const [imageRef, setImageRef] = useState();

	const classes = NetworkImageStyle();

	useEffect(() => {
		let observer;
		let didCancel = false;

		if (imageRef && imageSrc !== src) {
			if (IntersectionObserver) {
				observer = new IntersectionObserver(
					entries => {
						entries.forEach(entry => {
							if (
								!didCancel &&
								(entry.intersectionRatio > 0 || entry.isIntersecting)
							) {
								setImageSrc(src);
							}
						});
					},
					{
						threshold: 0.01,
						rootMargin: "75%",
					}
				);
				observer.observe(imageRef);
			} else {
				setImageSrc(src);
			}
		}

		return () => {
			didCancel = true;

			if (observer && observer.unobserve) {
				observer.unobserve(imageRef);
			}
		};
	});

	const imageClassname = classNames(className, classes.image);

	return (
		<img
			loading="auto"
			height="700"
			width="700"
			ref={setImageRef}
			src={imageSrc}
			alt={alt}
			className={imageClassname}
			onError={onErrorImage}
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
