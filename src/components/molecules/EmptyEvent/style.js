import { makeStyles } from '@material-ui/core/styles';

const EmptyEventStyle = makeStyles(({ font, color }) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
  },
  message: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: font.robotoCon,
    fontWeight: 400,
  },
  title: {
    marginTop: ({ isMobile }) => (isMobile ? 0 : -50),
    textAlign: 'center',
    color: color.dustyOrange,
    fontWeight: 800,

  },
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default EmptyEventStyle;
