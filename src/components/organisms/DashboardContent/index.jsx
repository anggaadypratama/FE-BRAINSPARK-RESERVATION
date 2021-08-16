import React from 'react';
import { Card, Typography, Container } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import DashboardContentStyle from './style';

const DashboardContent = ({ children, name, responders }) => {
  const classes = DashboardContentStyle();

  return (
    <>
      <Typography variant="h4" className={classes.titleContent}>{name}</Typography>
      <Card
        elevation={3}
        classes={{
          root:
            responders
              ? classes.containerRespondersRoot
              : '',
        }}
        className={
          responders
            ? classes.cardContentResponders
            : classes.cardContent
        }
      >
        <Container classes={{
          root:
            responders
              ? classes.containerRespondersRoot
              : '',
        }}
        >
          {children}
        </Container>
      </Card>
    </>
  );
};

DashboardContent.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  responders: PropTypes.bool,
};

DashboardContent.defaultProps = {
  children: '',
  name: '',
  responders: false,
};

export default DashboardContent;
