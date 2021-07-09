/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { PrivateRoute, routeList } from '../routes';

// import logo from './logo.svg';
// import { Counter } from '../features/counter/Counter';
// import './App.css';

import { Redirect, Route } from 'react-router';
import { nanoid } from 'nanoid';
import AppWrapper from './AppWrapper';
import GlobalRoute from '../routes/GlobalRoute';
import ROUTES from '../routes/routeList';

function App() {
  return (
    <AppWrapper>
      {
        ROUTES
          ?.filter(({ isPrivate }) => !isPrivate)
          .map((val) => <GlobalRoute exact key={nanoid()} {...val} />)
      }

      <Route path="/" render={() => <Redirect to="/brainspark" />} exact />

    </AppWrapper>

  );
}

export default App;
