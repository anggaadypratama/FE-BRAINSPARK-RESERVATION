/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router';
import { PropTypes } from 'prop-types';

const ProtectedRoute = ({ Component, isPrivate, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isPrivate && localStorage.token
      ? <Component {...props} />
      : <Redirect to="/" />)}
  />
);

ProtectedRoute.propTypes = {
  Component: PropTypes.node,
  isPrivate: PropTypes.bool,
  rest: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.object)]),
};

ProtectedRoute.defaultProps = {
  Component: '',
  isPrivate: false,
  rest: {},
};

export default ProtectedRoute;
