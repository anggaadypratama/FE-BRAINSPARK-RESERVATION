import {
  RplGdcLogo,
} from '@components';
import React from 'react';
// import ListIcon from '@material-ui/icons/List';
import {
  Card, IconButton, Typography,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';

import SidebarStyle from './style';
import SidebarMenu from '../SidebarMenu';

const Sidebar = () => {
  const classes = SidebarStyle();

  const data = [
    {
      name: 'List Event',
      Icon: ListAltRoundedIcon,
    },
    {
      name: 'Create Form',
      Icon: AddBoxIcon,
    }, {
      name: 'Data Responder',
      Icon: PeopleAltRoundedIcon,
    },
  ];

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.listWrapper}>
          <RplGdcLogo className={classes.logo} />

        </div>
        <SidebarMenu data={data} />
      </div>

      <Card elevation={0} className={classes.logoutButton}>
        <div className={classes.buttonWrapper}>
          <div className={classes.wrapperProfile}>
            <div className={classes.image}>A</div>
            <Typography className={classes.userRole}>Admin</Typography>
          </div>

          <IconButton>
            <ExitToAppIcon className={classes.exitIcon} />
          </IconButton>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
