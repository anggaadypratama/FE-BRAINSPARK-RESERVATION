/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { Redirect, Route } from "react-router";
import { PropTypes } from "prop-types";
import { useScreenSize } from "@assets";

import NotFound from "@page/NotFound";

const ProtectedRoute = ({ Component, isPrivate, ...rest }) => {
  const underDesktop = useScreenSize({ isMax: true, size: 762 });

  useEffect(() => {
    Component.preload();
  }, [Component]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isPrivate && localStorage.token ? (
          underDesktop ? (
            <NotFound />
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Component: PropTypes.any.isRequired,
  isPrivate: PropTypes.bool,
  rest: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.object)]),
};

ProtectedRoute.defaultProps = {
  isPrivate: false,
  rest: {},
};

export default ProtectedRoute;
