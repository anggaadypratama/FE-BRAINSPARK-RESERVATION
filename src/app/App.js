/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { PrivateRoute, routeList } from '../routes';

// import logo from './logo.svg';
// import { Counter } from '../features/counter/Counter';
// import './App.css';

import AppWrapper from './AppWrapper';
import GlobalRoute from '../routes/GlobalRoute';
import ROUTES from '../routes/routeList';

function App() {
  return (
    <AppWrapper>
      {
        ROUTES
          ?.filter(({ isPrivate }) => !isPrivate)
          .map((val) => <GlobalRoute {...val} exact />)
      }

    </AppWrapper>

  );
}

export default App;
