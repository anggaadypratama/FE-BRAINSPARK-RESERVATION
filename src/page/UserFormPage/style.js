import { makeStyles } from '@material-ui/core/styles';

const UserFormStyle = makeStyles(({ color }) => ({
  root: {
    padding: ({ isPhone }) => (isPhone ? '0' : '30px 33px'),
    margin: ({ isPhone }) => (isPhone ? '0' : '30px 10px 0'),
    borderRadius: 20,
  },
  formWrapper: {
    margin: 20,
  },
  inputWrapper: {
    margin: '10px 0',
  },
  formTitle: {
    textAlign: 'center',
    color: color.primaryText,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
  },
  button: {
    margin: '0 12px',
  },
}));

export default UserFormStyle;
