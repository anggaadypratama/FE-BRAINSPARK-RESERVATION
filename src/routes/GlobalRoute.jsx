import React, {useEffect} from "react";
import {Redirect, Route} from "react-router";
import {PropTypes} from "prop-types";
import NotFound from "@page/NotFound";
import {useScreenSize} from "@assets";
import {useQuery} from "react-query";
import {checkIsAuthenticated} from "@services";

const GlobalRoute = ({Component, isPrivate, ...rest}) => {
	const underDesktop = useScreenSize({isMax: true, size: 762});
	useEffect(() => {
		Component.preload();
	}, [Component]);

	useQuery("isAuthenticated", checkIsAuthenticated, {
		refetchInterval: 2000,
	});

	return (
		<Route
			{...rest}
			render={props =>
				isPrivate ? (
					<Redirect to="/dashboard" />
				) : rest?.name === "LoginPage" && underDesktop ? (
					<NotFound />
				) : (
					<Component {...rest} {...props} />
				)
			}
		/>
	);
};

GlobalRoute.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	Component: PropTypes.any.isRequired,
	isPrivate: PropTypes.bool,
	rest: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.object)]),
};

GlobalRoute.defaultProps = {
	isPrivate: false,
	rest: {},
};

export default GlobalRoute;
