/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// import logo from './logo.svg';
// import { Counter } from '../features/counter/Counter';
// import './App.css';

// import loadable from '@loadable/component';
import { Redirect, Route } from 'react-router';
import { nanoid } from 'nanoid';
import { GlobalRoute } from '@routes';
import ROUTES from '@routes/routeList';
import AppWrapper from './AppWrapper';

// const NotFound = loadable(() => import(/* webpackPrefetch: true */ '@page/NotFound'));

function App() {
  return (
    <AppWrapper>
      {
        ROUTES
          ?.filter(({ isPrivate }) => !isPrivate)
          .map((val) => <GlobalRoute Component={val.Component} key={nanoid()} {...val} />)
      }

      <Route path="/" render={() => <Redirect to="/brainspark" />} exact />
      {/* <Route path="/brainspark/404" component={NotFound} />
      <Redirect from="*" to="/brainspark/404" /> */}

    </AppWrapper>

  );
}

export default App;
