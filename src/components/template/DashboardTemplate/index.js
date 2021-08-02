import { Sidebar } from '@components';
import { Container } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import DashboardStyle from './style';

const DashboardTemplate = ({
  children, sidebarList,
}) => {
  const classes = DashboardStyle();

  return (
    <div className={classes.root}>
      <Sidebar list={sidebarList} />
      <div className={classes.content}>
        <Container>
          <div className={classes.contentWrapper}>
            {
              children
            }
            <div className={classes.marginBottom} />
          </div>

        </Container>
      </div>
    </div>
  );
};

DashboardTemplate.propTypes = {
  children: PropTypes.node,
  sidebarList: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),

};

DashboardTemplate.defaultProps = {
  children: '',
  sidebarList: [],

};

export default DashboardTemplate;
