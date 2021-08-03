import { DashboardTemplate, DashboardContent } from '@components';

import React from 'react';
import {
  HashRouter, Route, Switch,
} from 'react-router-dom';

import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';

import loadable from '@loadable/component';
import { nanoid } from 'nanoid';

const ListEventSection = loadable(() => import('./section/ListEventSection'));
const DataRespondersSection = loadable(() => import('./section/DataRespondersSection'));
const CreateEventSection = loadable(() => import('./section/CreateEventSection'));

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
  ];

  return (
    <HashRouter basename="/">
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
                render={() => (
                  <DashboardContent name={name} responders={responders}>
                    <Component />
                  </DashboardContent>
                )}
              />
            ))
          }
        </Switch>
      </DashboardTemplate>
    </HashRouter>

  );
};

export default DashboardPage;
