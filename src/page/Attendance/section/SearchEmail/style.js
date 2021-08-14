import { makeStyles } from '@material-ui/core/styles';

const SearchEmailStyle = makeStyles(({ spacing }) => ({
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: spacing(1),
  },

}));

export default SearchEmailStyle;
