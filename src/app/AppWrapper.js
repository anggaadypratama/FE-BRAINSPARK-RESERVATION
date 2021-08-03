import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from '@assets';

const AppWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Router basename="/">
      <Switch>
        <Suspense fallback={<div>Loading ....</div>}>
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
