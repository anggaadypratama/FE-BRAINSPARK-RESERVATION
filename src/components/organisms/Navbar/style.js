import { makeStyles } from '@material-ui/core';

const NavbarStyle = makeStyles(({
  font: {
    raleway,
  },
  color: {
    dustyOrange,
  },
}) => ({
  navText: {
    fontFamily: raleway,
    fontWeight: 800,
    fontSize: '1.25rem',
    marginLeft: '8px',
    color: 'white',
    letterSpacing: 2,
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
  },
  navbar: {
    height: 103,
    display: 'flex',
    justifyContent: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    fontFamily: raleway,
    fontWeight: 800,
    textTransform: 'uppercase',
    padding: '0 16px',
    height: 36,
  },
  default: {
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255, 0.1)',
    },
  },
  contained: {
    marginLeft: 12,
    color: dustyOrange,
    display: 'block',
    backgroundColor: 'white',

  },
  mobileMenu: {
    color: 'white',

  },
  menuButton: {
    marginLeft: 6,
  },
  antiWave: {
    background: 'linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%)',
    position: 'static',
  },
  dropdownMenu: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    top: 60,

  },
  dropdownItem: {
    textTransform: 'uppercase',
    minHeight: 48,
    padding: '0 16px',
  },

}));

export default NavbarStyle;
