import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { PropTypes } from 'prop-types';
import NotFound from '@page/NotFound';
import { GetScreenSize } from '@assets';

const GlobalRoute = ({ Component, isPrivate, ...rest }) => {
  const underDesktop = GetScreenSize({ isMax: true, size: 762 });
  useEffect(() => {
    Component.preload();
  }, [Component]);

  return (
    <Route
      {...rest}
      render={(props) => (isPrivate
        ? <Redirect to="/dashboard" />
        : (rest?.name === 'LoginPage' && underDesktop)
          ? <NotFound />
          : <Component {...rest} {...props} />)}
    />
  );
};

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
