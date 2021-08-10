import { makeStyles } from '@material-ui/core/styles';

const SidebarStyle = makeStyles(({
  spacing, font, color, transitions, breakpoints,
}) => ({
  root: {
    width: 270,
    height: '100%',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    boxShadow: '0 0 4px rgba(0,0,0,0.25)',
    zIndex: 3,
    top: 0,
    left: 0,
    justifyContent: 'space-between',
  },
  listWrapper: {
    padding: spacing(3),
  },
  logoutButton: {
    border: '1px solid #E0E0E0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 10,
    height: 75,
    color: color.primaryText,
    margin: spacing(3),
    font: font.raleway,
    background: 'white',
    transition: transitions.create(['color', 'background'], {
      duration: 200,
    }),

    '&:hover': {
      color: 'white',
      background: 'linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%)',

      '&.MuiSvgIcon-root': {
        background: 'white',
      },
    },
  },
  userRole: {
    fontWeight: 700,
    marginLeft: 14,
    textTransform: 'uppercase',
  },
  logoutText: {
    fontWeight: 800,
    marginTop: 8,
    textDecoration: 'underline',
    fontSize: '1.2rem',
  },
  image: {
    borderRadius: 10,
    objectFit: 'cover',
    height: 40,
    width: 40,
    fontWeight: '600',
    fontFamily: font.raleway,
    background: color.primary,
    display: 'grid',
    placeItems: 'center',
    textTransform: 'uppercase',
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
  },
  wrapperProfile: {
    display: 'flex',
    alignItems: 'center',
  },
  exitIcon: {
    transition: transitions.create(['color'], {
      duration: 200,
    }),
    '&:hover': {
      color: 'white',
    },
  },
  focusVisible: {},
  buttonLogout: {
    position: 'relative',
    height: 75,
    padding: spacing(2),

    [breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style

    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
}));

export default SidebarStyle;
