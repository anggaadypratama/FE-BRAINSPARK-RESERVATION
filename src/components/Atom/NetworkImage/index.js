import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ImageNotFound } from '@assets/image';

const NetworkImage = ({
  src, alt, className, onErrorImage,
}) => {
  const imageClassname = classNames(className);
  const [imageSrc, setImageSrc] = useState(src);

  const imageError = () => setImageSrc(onErrorImage);

  return (
    <img
      src={imageSrc || onErrorImage}
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
  className: '',
  onErrorImage: ImageNotFound,
};

export default NetworkImage;
