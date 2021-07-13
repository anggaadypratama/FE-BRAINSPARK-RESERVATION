import { makeStyles } from '@material-ui/core/styles';

const ListEventStyle = makeStyles(() => ({
  waveBackdrop: {
    width: '100%',
    backgroundPosition: 'center center',
    backgroundImage: 'cover',
    height: '125vh',
    background: 'linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%)',

  },
  waveJumbotron: {
    position: 'absolute',
    bottom: '-25vh',
    width: '100%',
  },
  titlePosition: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'raleway',
    fontWeight: 700,
    color: 'white',

  },
  content: {
    marginTop: 100,
  },
  textCenter: {
    textAlign: 'center',
  },
}));

export default ListEventStyle;