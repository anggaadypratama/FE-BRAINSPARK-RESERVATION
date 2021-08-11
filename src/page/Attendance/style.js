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
  waveLeft: {
    position: 'absolute',
    width: '100%',
    height: 'inherit',
    bottom: 0,
    left: 0,
    zIndex: 0,
  },
  content: {
    position: 'absolute',
    zIndex: 1,
  },
  cardContent: {
    padding: '21px 27px',
    width: 508,
    borderRadius: spacing(1),
  },
  header: {
    display: 'flex',
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
    marginTop: spacing(3),
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
}));

export default AttendanceStyle;
