import { makeStyles } from '@material-ui/core/styles';

const LoginStyle = makeStyles(({ color }) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    width: '100%',
    height: '100%',
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
    height: '100%',
    bottom: 0,
    left: 0,
    zIndex: 0,
  },
  content: {
    position: 'absolute',
    zIndex: 1,

  },
  formCard: {
    padding: '32px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formItem: {
    margin: '18px 0',
    width: 350,
    outlineColor: color.primary,
  },
  buttonWrapper: {
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default LoginStyle;
