import {DashboardTemplate, DashboardContent, Loading} from "@components";

import React, {useEffect} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import AddBoxIcon from "@material-ui/icons/AddBox";

import loadable from "@loadable/component";
import {nanoid} from "nanoid";
import {checkIsAuthenticated} from "@services";

const ListEventSection = loadable(
	() => import(/* webpackPrefetch: true */ "./section/ListEventSection"),
	{
		fallback: <Loading />,
	}
);
const DataRespondersSection = loadable(
	() => import(/* webpackPrefetch: true */ "./section/DataRespondersSection"),
	{
		fallback: <Loading />,
	}
);
const CreateEventSection = loadable(
	() => import(/* webpackPrefetch: true */ "./section/CreateEventSection"),
	{
		fallback: <Loading />,
	}
);
const EditEventSection = loadable(
	() => import(/* webpackPrefetch: true */ "./section/EditEventSection"),
	{
		fallback: <Loading />,
	}
);

const DashboardPage = () => {
	const routes = [
		{
			name: "List Event",
			Component: ListEventSection,
			Icon: ListAltRoundedIcon,
			responders: false,
			path: "/",
		},
		{
			name: "Create Event",
			Component: CreateEventSection,
			Icon: AddBoxIcon,
			responders: false,
			path: "/create",
		},
		{
			name: "Data Responders",
			Component: DataRespondersSection,
			Icon: PeopleAltRoundedIcon,
			responders: true,
			path: "/responders",
		},
		{
			name: "Edit Event",
			Component: EditEventSection,
			Icon: PeopleAltRoundedIcon,
			responders: false,
			path: "/edit/:id",
		},
	];

	useEffect(() => {
		checkIsAuthenticated();
	}, []);

	useEffect(() => {
		ListEventSection.preload();
		CreateEventSection.preload();
		DataRespondersSection.preload();
		EditEventSection.preload();
	}, [
		ListEventSection,
		CreateEventSection,
		DataRespondersSection,
		EditEventSection,
	]);

	return (
		<>
			<Router basename="/">
				<DashboardTemplate sidebarList={routes}>
					<Switch>
						{routes?.map(({name, path, Component, responders}) => (
							<Route
								key={nanoid()}
								path={path}
								exact
								render={props => (
									<DashboardContent name={name} responders={responders}>
										<Component {...props} />
									</DashboardContent>
								)}
							/>
						))}
						<Route
							path="/edit/:id"
							exact
							render={() => {
								<DashboardContent name="Edit Event" responders={false}>
									<EditEventSection />
								</DashboardContent>;
							}}
						/>
					</Switch>
				</DashboardTemplate>
			</Router>
		</>
	);
};

export default DashboardPage;
