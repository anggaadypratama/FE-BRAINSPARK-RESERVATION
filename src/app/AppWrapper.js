import { ThemeProvider } from '@material-ui/core';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import theme from '../assets/style/index';

const AppWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Suspense fallback={<div>ea</div>}>
          {children}
        </Suspense>
      </Switch>
    </Router>
  </ThemeProvider>
);

AppWrapper.propTypes = {
  children: PropTypes.node,
};

AppWrapper.defaultProps = {
  children: '',
};

export default AppWrapper;
