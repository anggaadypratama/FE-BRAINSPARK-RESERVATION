import React from 'react';
import { Snackbar as Snack } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';

const Snackbar = ({
  handleClose, open, status, children,
}) => (
  <Snack open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity={status}>
      {children}
    </Alert>
  </Snack>
);

Snackbar.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  status: PropTypes.string,
  children: PropTypes.node,
};

Snackbar.defaultProps = {
  handleClose: () => {},
  open: false,
  status: 'success',
  children: '',
};

export default Snackbar;
