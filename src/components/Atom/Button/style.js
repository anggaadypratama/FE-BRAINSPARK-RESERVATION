import { makeStyles } from '@material-ui/core/styles';

const buttonStyle = makeStyles((theme) => ({
  root: {
    fontFamily: theme.font.raleway,
    fontWeight: 800,
  },
  primary: {
    background: 'linear-gradient(68.21deg, #EB8402 12.88%, #DA251B 98.79%)',
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
