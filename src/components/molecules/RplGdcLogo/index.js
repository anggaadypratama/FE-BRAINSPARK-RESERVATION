import React from 'react';
import { Typography } from '@material-ui/core';
import { IconLogo } from '@assets/image';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import RplGdcLogoStyle from './style';

const RplGdcLogo = ({ className }) => {
  const classes = RplGdcLogoStyle();
  const {
    heading,
    headingIcon,
    logo,
    headingInfo,
    headText,
    subHeadText,
  } = classes;

  const rootClass = classNames(className, heading);

  return (
    <div className={rootClass}>
      <div className={headingIcon}>
        <img className={logo} src={IconLogo} alt="icon logo" />
      </div>
      <div className={headingInfo}>
        <Typography className={headText}>RPL-GDC</Typography>
        <Typography className={subHeadText}>Admin</Typography>
      </div>
    </div>
  );
};

RplGdcLogo.propTypes = {
  className: PropTypes.string,
};

RplGdcLogo.defaultProps = {
  className: '',
};

export default RplGdcLogo;
