import { makeStyles } from '@material-ui/core/styles';

const LoadingStyle = makeStyles((theme) => ({
  loading: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    height: '100vh',
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default LoadingStyle;
