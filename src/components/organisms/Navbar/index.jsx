import React from 'react';

import {
  Container, IconButton, List, ListItem,
  Popover, Typography, Toolbar, AppBar, Link as LinkMaterial,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import GetScreenSize from '@assets/breakpoints';
import { IconLogo } from '@assets/image';
import { Button } from '@components';

import { Link } from 'react-router-dom';
import NavbarStyle from './style';

const Navbar = ({ className, color }) => {
  const ScreenLarge = GetScreenSize({ isMax: true, size: 959 });
  const ScreenPhone = GetScreenSize({ isMax: true, size: 400 });
  const classes = NavbarStyle();

  const appbarClassnames = classNames(
    className,
    classes.navbar,
  );
  const buttonContainedClassnames = classNames(classes.button, classes.contained);
  const buttonDefaultClassnames = classNames(classes.button, classes.default);
  const menuClassnames = classNames(classes.menuButton, classes.default);

  const menu = [
    {
      name: 'home',
      link: 'https://rplgdc.netlify.app/',
      typebutton: 'link',
    },
    {
      name: 'brainspark',
      link: '/',
      typebutton: 'link-dom',
    },
    {
      name: 'division',
      link: 'https://rplgdc.netlify.app/division',
      typebutton: 'link',
    },
    {
      name: 'product',
      link: 'https://rplgdc.netlify.app/product',
      typebutton: 'link',
    },
    {
      name: 'blog',
      link: 'https://medium.com/rplgdc-laboratory',
      typebutton: 'link',
    },
    {
      name: 'status',
      typebutton: '',
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
    <AppBar
      elevation={0}
      color={color}
      classes={{ colorDefault: color === 'default' && classes.antiWave }}
      position={color === 'default' ? 'static' : 'absolute'}
      className={appbarClassnames}
    >
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <div className={classes.content}>
            <img src={IconLogo} height="32" width="32" alt="logo rpl-gdc" />
            <Typography variant="h6" className={classes.navText}>
              RPL-GDC
            </Typography>
          </div>
          <div className={classes.content}>
            {!ScreenLarge
                && menu?.filter((val) => val.name !== 'status').map(({ name, ...rest }) => (
                  <Button {...rest} key={nanoid()} className={buttonDefaultClassnames}>
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
                            menu?.filter(({ name }) => (!ScreenPhone ? (name !== 'status') : name)).map(({ name, link, typebutton }) => {
                              if (typebutton === 'link-dom') {
                                return (
                                  <Link key={nanoid()} to={link}>
                                    <ListItem
                                      button
                                      className={classes.dropdownItem}
                                    >
                                      {name}
                                    </ListItem>
                                  </Link>
                                );
                              }
                              return (
                                <LinkMaterial key={nanoid()} href={link}>
                                  <ListItem
                                    button
                                    className={classes.dropdownItem}
                                  >
                                    {name}
                                  </ListItem>
                                </LinkMaterial>
                              );
                            })
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
  color: 'default',
};

export default Navbar;
