import { makeStyles } from '@material-ui/core/styles';

const CreateFormStyle = makeStyles(({ color, spacing }) => ({
  formWrapper: {
    maxWidth: 700,
  },
  time: {
    marginTop: 14,
  },
  timeWrapper: {
    marginTop: 8,
    display: 'flex',
    color: color.primaryText,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 70,
    display: 'flex',
    justifyContent: 'center',
  },
  timeInput: {
    margin: '0 8px',

    '&:first-child': {
      marginLeft: 0,
    },
  },
  locationWrapper: {
    margin: spacing(0, 2),
  },
  errorAlert: {
    marginBottom: 400,
  },
  disableErrorAlert: {
    marginBottom: 0,
  },
  snackbar: {
    width: '100%',
    '& > * + *': {
      marginTop: spacing(2),
    },
  },
}));

export default CreateFormStyle;
