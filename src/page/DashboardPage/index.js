import { DashboardTemplate, DashboardContent } from '@components';

import React from 'react';
import {
  HashRouter as Router, Route, Switch,
} from 'react-router-dom';

import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';

import loadable from '@loadable/component';
import { nanoid } from 'nanoid';

const ListEventSection = loadable(() => import(/* webpackPrefetch: true */ './section/ListEventSection'));
const DataRespondersSection = loadable(() => import(/* webpackPrefetch: true */ './section/DataRespondersSection'));
const CreateEventSection = loadable(() => import(/* webpackPrefetch: true */ './section/CreateEventSection'));
const EditEventSection = loadable(() => import(/* webpackPrefetch: true */ './section/EditEventSection'));

const DashboardPage = () => {
  const routes = [
    {
      name: 'List Event',
      Component: ListEventSection,
      Icon: ListAltRoundedIcon,
      responders: false,
      path: '/',
    },
    {
      name: 'Create Event',
      Component: CreateEventSection,
      Icon: AddBoxIcon,
      responders: false,
      path: '/create',
    },
    {
      name: 'Data Responders',
      Component: DataRespondersSection,
      Icon: PeopleAltRoundedIcon,
      responders: true,
      path: '/responders',
    },
    {
      name: 'Edit Event',
      Component: EditEventSection,
      Icon: PeopleAltRoundedIcon,
      responders: false,
      path: '/edit/:id',
    },
  ];

  return (
    <Router basename="/">
      <DashboardTemplate sidebarList={routes}>
        <Switch>
          {
            routes?.map(({
              name, path, Component, responders,
            }) => (
              <Route
                key={nanoid()}
                path={path}
                exact
                render={(props) => (
                  <DashboardContent name={name} responders={responders}>
                    <Component {...props} />
                  </DashboardContent>
                )}
              />
            ))
          }
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

  );
};

export default DashboardPage;