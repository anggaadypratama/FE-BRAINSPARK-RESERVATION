/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router';
import { PropTypes } from 'prop-types';

const GlobalRoute = ({ Component, isPrivate, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isPrivate
      ? <Component {...props} />
      : <Redirect to="/brainspark" />)}
  />
);

GlobalRoute.propTypes = {
  Component: PropTypes.node,
  isPrivate: PropTypes.bool,
  rest: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.object)]),
};

GlobalRoute.defaultProps = {
  Component: '',
  isPrivate: false,
  rest: {},
};

export default GlobalRoute;
