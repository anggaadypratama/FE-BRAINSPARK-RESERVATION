import { makeStyles } from '@material-ui/core/styles';

const AttendanceStyle = makeStyles(({ spacing, font }) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    width: '100%',
    height: 'inherit',
  },
  waveRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
  waveRightCard: {
    position: 'absolute',
    top: 0,
    right: -70,
    zIndex: 0,
    height: 200,
  },
  waveLeft: {
    position: 'absolute',
    width: '100%',
    height: 'inherit',
    bottom: ({ screenL, screenS }) => (screenL ? -200 : screenS ? 0 : 0),
    left: 0,
    zIndex: 0,
  },
  waveLeftCard: {
    position: 'absolute',
    width: '100%',
    height: 'inherit',
    bottom: -140,
    left: 0,
    zIndex: 0,
  },
  content: {
    width: ({ screenS }) => (screenS && '100%'),
    position: 'absolute',
    zIndex: 1,
  },
  cardContent: {
    padding: '21px 27px',
    width: ({ screenS }) => (screenS ? '100%' : 508),
    borderRadius: ({ screenS }) => (screenS ? spacing(0) : spacing(1)),
    minHeight: ({ screenS }) => (screenS ? '100vh' : 200),
  },
  header: {
    marginTop: ({ screenS }) => (screenS ? 120 : 0),
    display: 'flex',
    justifyContent: ({ screenS }) => (screenS ? 'center' : 'flex-start'),
    alignItems: 'center',
  },
  titleWrapper: {
    margin: spacing(0, 2),
  },
  title: {
    fontWeight: 800,
    fontSize: 18,
    fontFamily: font.raleway,
  },
  subtitle: {
    fontWeight: 700,
    fontSize: 14,
    fontFamily: font.raleway,
  },
  logo: {
    width: 45,
    height: 45,
  },
  mainContent: {
    marginTop: ({ screenS }) => (screenS ? spacing(6) : spacing(3)),
  },
  titleFormWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  helperText: {
    color: '#337E3A',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 1,
    marginBottom: 4,
  },
  titleForm: {
    color: '#646464',
    fontWeight: 700,
    lineHeight: 1.5,
  },
  subtitleForm: {
    marginLeft: 4,
    fontWeight: 500,
    color: '#646464',
    fontSize: 12,
    font: 'oblique',
    lineHeight: 1,
  },
  greetingWrapper: {
    display: 'flex',

    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    minHeight: ({ screenS }) => (screenS ? '100vh' : 200),
  },
  loadingWrapper: {
    width: '100%',
    minHeight: ({ screenS }) => (screenS ? '100vh' : 200),
    display: 'grid',
    placeItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: spacing(11),
  },
  logoSecond: {
    height: 30,
    width: 30,
  },
  titleLogo: {
    marginLeft: spacing(2),
    fontFamily: font.robotoCon,
    fontWeight: 900,
    fontSize: 21,
  },
  message: {
    fontFamily: font.raleway,
    fontWeight: 700,
    padding: spacing(6),
    background: ' -webkit-linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%), -webkit-linear-gradient(0deg, #000000, #000000)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
}));

export default AttendanceStyle;
