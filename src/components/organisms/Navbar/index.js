import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  Container, Button, IconButton, List, ListItem,
  Popover,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import NavbarStyle from './style';
import GetScreenSize from '../../../utils/breakpoints/index';
import { IconLogo } from '../../../utils/image';

const Navbar = ({ className, color }) => {
  const ScreenLarge = GetScreenSize({ isMax: true, size: 959 });
  const ScreenPhone = GetScreenSize({ isMax: true, size: 400 });
  const classes = NavbarStyle();

  const appbarClassnames = classNames(
    className,
    classes.navbar,
    color.length === 0 && classes.antiWave,
  );
  const buttonContainedClassnames = classNames(classes.button, classes.contained);
  const buttonDefaultClassnames = classNames(classes.button, classes.default);
  const menuClassnames = classNames(classes.menuButton, classes.default);

  const menu = [
    {
      name: 'home',
    },
    {
      name: 'brainspark',
    },
    {
      name: 'division',
    },
    {
      name: 'product',
    },
    {
      name: 'blog',
    },
    {
      name: 'status',
    },
  ];

  const [toggleMenu, setToggleMenu] = React.useState(null);

  const handleClickMenu = (event) => {
    setToggleMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setToggleMenu(null);
  };

  const open = Boolean(toggleMenu);
  const id = open ? 'simple-popover' : undefined;

  return (
    <AppBar elevation={0} color={color} position="absolute" className={appbarClassnames}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <div className={classes.content}>
            <img src={IconLogo} alt="logo rpl-gdc" />
            <Typography variant="h6" className={classes.navText}>
              RPL-GDC
            </Typography>
          </div>
          <div className={classes.content}>
            {!ScreenLarge
                && menu?.filter(({ name }) => name !== 'status').map(({ name }) => (
                  <Button key={nanoid()} className={buttonDefaultClassnames}>
                    {name}
                  </Button>
                ))}
            {!ScreenPhone && <Button className={buttonContainedClassnames} variant="contained" disableElevation>status</Button>}
            {
              ScreenLarge && (
              <>
                <IconButton onClick={handleClickMenu} className={menuClassnames} color="inherit" aria-label="menu">
                  <MenuIcon className={classes.mobileMenu} />
                </IconButton>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={toggleMenu}
                  onClose={handleCloseMenu}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <List component="nav">
                    {
                            menu?.filter(({ name }) => (!ScreenPhone ? (name !== 'status') : name)).map(({ name }) => (
                              <ListItem
                                key={nanoid()}
                                button
                                className={classes.dropdownItem}
                              >
                                {name}
                              </ListItem>
                            ))
                          }
                  </List>
                </Popover>
              </>
              )
            }

          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

Navbar.defaultProps = {
  className: '',
  color: '',
};

export default Navbar;
