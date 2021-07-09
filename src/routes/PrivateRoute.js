/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router';
import { PropTypes } from 'prop-types';

const GlobalRoute = ({ component: Component, isPrivate, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isPrivate
      ? <Component {...props} />
      : <Redirect to="/brainspark" />)}
  />
);

GlobalRoute.propTypes = {
  component: PropTypes.node,
  isPrivate: PropTypes.bool,
  rest: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.object)]),
};

GlobalRoute.defaultProps = {
  component: '',
  isPrivate: false,
  rest: {},
};

export default GlobalRoute;
