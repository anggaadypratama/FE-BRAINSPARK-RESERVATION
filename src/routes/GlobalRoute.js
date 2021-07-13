import React from 'react';
import { Redirect, Route } from 'react-router';
import { PropTypes } from 'prop-types';
import AsyncPage from './AsyncPage';

const GlobalRoute = ({ isPrivate, ...rest }) => (
  <Route
    {...rest}
    render={() => (isPrivate
      ? <Redirect to="/dashboard" />
      : <AsyncPage {...rest} />)}
  />
);

GlobalRoute.propTypes = {
  Component: PropTypes.node,
  isPrivate: PropTypes.bool,
  rest: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.object)]),
};

GlobalRoute.defaultProps = {
  Component: <div />,
  isPrivate: false,
  rest: {},
};

export default GlobalRoute;
