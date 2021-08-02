import {
  RplGdcLogo,
} from '@components';
import React from 'react';
// import ListIcon from '@material-ui/icons/List';
import {
  // ButtonBase,
  Card, Typography,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import PropTypes from 'prop-types';
import SidebarStyle from './style';
import SidebarMenu from '../SidebarMenu';

const Sidebar = ({ list }) => {
  const classes = SidebarStyle();

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.listWrapper}>
          <RplGdcLogo className={classes.logo} />

        </div>
        <SidebarMenu data={list} />
      </div>

      {/* <ButtonBase> */}
      <Card elevation={0} className={classes.logoutButton}>

        <div className={classes.buttonWrapper}>
          <div className={classes.wrapperProfile}>
            <div className={classes.image}>A</div>
            <Typography className={classes.userRole}>Admin</Typography>
          </div>

          <ExitToAppIcon className={classes.exitIcon} />

        </div>

      </Card>
      {/* </ButtonBase> */}

    </div>
  );
};

Sidebar.propTypes = {
  list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
};

Sidebar.defaultProps = {
  list: [],
};

export default Sidebar;
