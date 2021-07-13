import { makeStyles } from '@material-ui/core/styles';

const infoStyle = makeStyles((
  {
    font: {
      robotoCon,
    },
    color: {
      primary,
    },
  },
) => ({
  info: {
    maxWidth: '100%',
    marginLeft: ({ isMedium }) => (isMedium ? 0 : 20),
    display: 'block',
  },
  infoMobile: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardInfo: {
    position: ({ position }) => (position ? 'sticky' : 'relative'),
    width: ({ isMedium }) => (isMedium ? 600 : '100%'),
    top: 20,
    maxWidth: '100%',

    boxShadow: 'none',
    fontSize: '1.25rem',
  },
  textInfo: {
    fontFamily: robotoCon,
    fontWeight: 400,
  },
  titleInfo: {
    fontFamily: robotoCon,
    fontWeight: 600,
    marginBottom: 8,
    marginTop: 20,

    '&>:nth-child(1)': {
      marginTop: 0,
    },
  },
  registerInfo: {
    margin: '20px 0',
    textAlign: 'center',
    color: primary,
  },
  registerTitle: {
    fontWeight: 800,
    fontFamily: robotoCon,
  },
  registerTextInfo: {
    fontFamily: robotoCon,
    marginTop: 4,
    fontWeight: 400,
  },
  registerUntil: {
    marginTop: 10,
  },
  commonInfo: {
    maxWidth: 200,
  },
}));

export default infoStyle;
