import { makeStyles } from '@material-ui/core/styles';

const DetailEventStyle = makeStyles(({
  font: {
    raleway, robotoCon,
  },
  color: {
    paragraph,
  },
}) => ({
  containerContent: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    flexDirection: ({ isMedium }) => (isMedium ? 'column' : 'row'),
  },
  content: {
    maxWidth: ({ isMedium }) => (isMedium ? '100%' : '70%'),
    padding: '24px 0',
    borderRadius: 20,
  },

  contentTitle: {
    fontFamily: raleway,
    fontWeight: 700,
    padding: 20,
    paddingTop: 0,
  },
  contentBanner: {
    width: '100%',
    marginTop: 20,
  },
  contentDescWrapper: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  contentDesc: {
    maxWidth: ' 600px',
    fontFamily: robotoCon,
    fontSize: ({ isMedium }) => (isMedium ? '1rem' : '1.25rem'),
    fontWeight: 400,
    lineHeight: ({ isMedium }) => (isMedium ? '28px' : '32px'),
    color: paragraph,
  },
  avatarImage: {
    height: 'inherit',
    width: 'inherit',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}));

export default DetailEventStyle;
