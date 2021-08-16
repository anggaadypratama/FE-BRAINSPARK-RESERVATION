import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { theme } from '@assets';

const queryClient = new QueryClient();

const AppWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Router basename="/">
      <Switch>
        <Suspense fallback={<div>Loading ....</div>}>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
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
