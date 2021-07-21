import { Sidebar } from '@components';
import { Card, Container, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import DashboardStyle from './style';

const DashboardTemplate = ({ children }) => {
  const classes = DashboardStyle();

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.content}>
        <Container>
          <div className={classes.contentWrapper}>
            <Typography variant="h4" className={classes.titleContent}>Judul gan</Typography>
            <Card elevation={3} className={classes.cardContent}>
              <Container>
                {children}
              </Container>
            </Card>
          </div>

        </Container>
      </div>
    </div>
  );
};

DashboardTemplate.propTypes = {
  children: PropTypes.node,
};

DashboardTemplate.defaultProps = {
  children: '',
};

export default DashboardTemplate;
