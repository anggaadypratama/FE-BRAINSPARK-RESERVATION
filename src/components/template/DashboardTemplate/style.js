import { makeStyles } from '@material-ui/core/styles';

const DashboardStyle = makeStyles(({ color, spacing, font }) => ({
  '@global': {
    body: {
      backgroundColor: color.background,
    },
  },
  root: {
    width: '100%',
    height: '100vh',
  },
  content: {
    left: 300,
    right: 130,
    width: 'calc(100%-300px)',
    position: 'absolute',

  },
  contentWrapper: {
    marginTop: 30,
    display: 'inline-block',
    marginBottom: 50,
  },
  cardContent: {
    borderRadius: 20,
    padding: spacing(5),
    width: '100%',
    minHeight: '80vh',
  },
  titleContent: {
    marginBottom: 20,
    fontWeight: 800,
    fontFamily: font.raleway,
    color: color.primaryText,
  },
}));

export default DashboardStyle;
