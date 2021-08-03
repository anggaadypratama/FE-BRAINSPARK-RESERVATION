import React from 'react';
import { Redirect, Route } from 'react-router';
import { PropTypes } from 'prop-types';

const GlobalRoute = ({ isPrivate, Component, ...rest }) => (
  <Route
    {...rest}
    render={() => (isPrivate
      ? <Redirect to="/dashboard" />
      : <Component {...rest} />)}
  />
);

GlobalRoute.propTypes = {
  Component: PropTypes.node.isRequired,
  isPrivate: PropTypes.bool,
  rest: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.object)]),
};

GlobalRoute.defaultProps = {
  isPrivate: false,
  rest: {},
};

export default GlobalRoute;
