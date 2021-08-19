/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
// import { Redirect, Route } from 'react-router';
import { nanoid } from "nanoid";
import { GlobalRoute, ProtectedRoute } from "@routes";
import ROUTES from "@routes/routeList";
// import loadable from '@loadable/component';
import AppWrapper from "./AppWrapper";

// const NotFound = loadable(() => import(/* webpackPrefetch: true */ '@page/NotFound'));

function App() {
  return (
    <AppWrapper>
      {ROUTES?.filter(({ isPrivate }) => !isPrivate).map((val) => (
        <GlobalRoute Component={val.Component} key={nanoid()} {...val} />
      ))}
      {ROUTES?.filter(({ isPrivate }) => isPrivate).map((val) => (
        <ProtectedRoute Component={val.Component} key={nanoid()} {...val} />
      ))}
      {/*
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" /> */}
    </AppWrapper>
  );
}

export default App;
