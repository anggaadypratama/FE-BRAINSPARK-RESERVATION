import {
  RplGdcLogo,
} from '@components';
import React, { useState } from 'react';
import {
  ButtonBase,
  Card, Typography,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ModalApp } from '@/components/molecules';
import { useHistory } from 'react-router';
import SidebarStyle from './style';
import SidebarMenu from '../SidebarMenu';

const Sidebar = ({ list, size }) => {
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const classes = SidebarStyle({ sizeLG: size });
  const classButtonWrapper = classNames(classes.buttonLogout, classes.buttonWrapper);
  const payload = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));

  const history = useHistory();

  const closeModalLogout = () => {
    setLogoutConfirm(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/dashboard');
  };

  const LogoutButton = () => {
    const displayName = payload.username.length > 6 ? payload.role : payload.username;

    return (
      <Card elevation={0} className={classes.logoutButton}>
        <ButtonBase
          focusRipple
          onClick={() => setLogoutConfirm(true)}
          className={classButtonWrapper}
          focusVisibleClassName={classes.focusVisible}
        >
          {
            !size && (
            <div className={classes.wrapperProfile}>
              <div className={classes.image}>{displayName[0]}</div>
              <Typography className={classes.userRole}>{displayName}</Typography>
            </div>
            )
          }
          <ExitToAppIcon className={classes.exitIcon} />

        </ButtonBase>
      </Card>
    );
  };

  return (
    <>
      <ModalApp
        isActive={logoutConfirm}
        handleClose={closeModalLogout}
        title="Logout Confirmation"
        hasActionButton
        actionButtonName="Logout"
        actionButtonClick={handleLogout}
      >
        Do you really want to logout
      </ModalApp>
      <div className={classes.root}>

        <div>
          <div className={classes.listWrapper}>
            <RplGdcLogo className={classes.logo} size={size} />
          </div>
          <SidebarMenu data={list} size={size} />
        </div>
        <LogoutButton />
      </div>
    </>
  );
};

Sidebar.propTypes = {
  list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
  size: PropTypes.bool,
};

Sidebar.defaultProps = {
  list: [],
  size: false,
};

export default Sidebar;
