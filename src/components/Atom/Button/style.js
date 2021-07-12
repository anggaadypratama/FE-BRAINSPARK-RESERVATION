import { makeStyles } from '@material-ui/core/styles';

const buttonStyle = makeStyles((theme) => ({
  root: {
    fontFamily: theme.font.raleway,
    fontWeight: 800,
  },
  primary: {
    background: 'linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%);',
    color: 'white',
  },
  secondary: {
    backgroundColor: theme.color.tequila,
    color: theme.color.dustyOrange,
  },
  fullWidth: {
    width: '100%',
  },

}));

export default buttonStyle;
