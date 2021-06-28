import React, { Suspense, lazy } from 'react';

// import logo from './logo.svg';
// import { Counter } from '../features/counter/Counter';
// import './App.css';

import { ThemeProvider } from '@material-ui/core';

import theme from '../utils/style';

const DetailEvent = lazy(() => import('../page/DetailEvent'));

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>a</div>}>
        <DetailEvent />
      </Suspense>
    </ThemeProvider>

  );
}

export default App;
