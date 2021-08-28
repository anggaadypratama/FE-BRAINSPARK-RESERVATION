import React from "react";
import loadable from "@loadable/component";
import {Loading} from "@components";

const ListEventPage = loadable(
	() => import(/* webpackPrefetch: true */ "@page/ListEventPage"),
	{
		fallback: <Loading />,
	}
);
const LoginPage = loadable(
	() => import(/* webpackPrefetch: true */ "@page/LoginPage"),
	{
		fallback: <Loading />,
	}
);
const DashboardListPage = loadable(
	() => import(/* webpackPrefetch: true */ "@page/DashboardPage"),
	{
		fallback: <Loading />,
	}
);
const ContentEventPage = loadable(
	() => import(/* webpackPrefetch: true */ "@page/ContentEventPage"),
	{
		fallback: <Loading />,
	}
);
const AttendancePage = loadable(
	() => import(/* webpackPrefetch: true */ "@page/Attendance"),
	{
		fallback: <Loading />,
	}
);

const ROUTES = [
	{
		name: "ListEventPage",
		Component: ListEventPage,
		path: "/",
		isPrivate: false,
		exact: true,
	},
	{
		name: "ContentEventPage",
		Component: ContentEventPage,
		path: "/p/:id",
		isPrivate: false,
		exact: true,
	},
	{
		name: "LoginPage",
		Component: LoginPage,
		path: "/login",
		isPrivate: false,
		exact: true,
	},
	{
		name: "DashboardPage",
		Component: DashboardListPage,
		path: "/dashboard",
		isPrivate: true,
		exact: false,
	},
	{
		name: "AttendancePage",
		Component: AttendancePage,
		path: "/attendance/:id",
		isPrivate: false,
		exact: true,
	},
];

export default ROUTES;
