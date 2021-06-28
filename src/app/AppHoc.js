// import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import PropTypes from 'prop-types';
// import { compose } from 'ramda';
import React from 'react';
import theme from '../utils/style';

const withHoc = (Component) => (
  <ThemeProvider theme={theme}>
    <Component />
  </ThemeProvider>
);

withHoc.propTypes = {
  children: PropTypes.node,
};

withHoc.defaultProps = {
  children: <div />,
};

export default withHoc;
