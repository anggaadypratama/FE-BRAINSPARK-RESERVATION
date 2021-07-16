/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button as ButtonMaterial } from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import buttonStyle from './style';

const Button = ({
  className, children, variant, disableElevation, onClick, disabled, type, isFullWidth, size,
}) => {
  const classes = buttonStyle();
  const {
    primary, secondary, fullWidth, root, secondaryGradient,
  } = classes;

  const buttonType = type === 'primary' ? primary
    : type === 'secondary' ? secondary
      : type === 'secondary-gradient' ? secondaryGradient : '';

  const buttonClassnames = classNames(className, root, buttonType, {
    [`${fullWidth}`]: isFullWidth,
  });
  const props = {
    variant,
    disableElevation,
    onClick,
    disabled,
    size,
  };
  return <ButtonMaterial className={buttonClassnames} {...props}>{children}</ButtonMaterial>;
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  props: PropTypes.objectOf(PropTypes.object),
  variant: PropTypes.string,
  disableElevation: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  isFullWidth: PropTypes.bool,
  size: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  children: '',
  props: {},
  variant: 'text',
  disableElevation: false,
  onClick: () => {},
  disabled: false,
  type: '',
  isFullWidth: false,
  size: '',
};

export default Button;
