import { makeStyles } from '@material-ui/core/styles';

const listCardStyle = makeStyles(() => ({
  content: {
    marginTop: 50,
  },
  filter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalItem: {
    marginRight: 30,
  },
}));

export default listCardStyle;
