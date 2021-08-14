import { makeStyles } from '@material-ui/core/styles';

const FormRespondersStyle = makeStyles(({ spacing, color, font }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: spacing(2),
  },

  name: {
    fontWeight: 700,
    fontFamily: font.raleway,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: spacing(1),
  },
  button: {
    color: color.primary,
  },
  buttonSpacing: {
    margin: spacing(0, 2),
  },
}));

export default FormRespondersStyle;
