import { makeStyles } from '@material-ui/core/styles';

const CardStyle = makeStyles(({ color, font }) => ({
  card: {
    background: 'linear-gradient(3.55deg, #FEE8D0 37.62%, #FFF8F1 95.02%)',
    minHeight: '250px',
    borderRadius: 40,
    padding: 16,
    position: 'relative',
  },
  cardAction: {
    borderRadius: 40,
  },
  imageNormal: {
    width: (isMobile) => (isMobile ? '100%' : 250),
    height: (isMobile) => (isMobile ? 'inherit' : 250),
    borderRadius: 25,
    backgroundSize: 'cover',
  },
  contentWrapper: {
    display: 'flex',
    position: 'relative',
    flexDirection: (isMobile) => (isMobile ? 'column' : 'row'),
    zIndex: 2,
  },
  content: {
    marginLeft: (isMobile) => (isMobile ? 0 : 10),
    marginTop: (isMobile) => (isMobile ? 16 : 0),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '8px 16px 8px 16px',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  status: {
    textTransform: 'uppercase',
    color: color.primary,
    fontFamily: font.raleway,
    fontWeight: 800,
    lineHeight: '21px',
  },
  title: {
    marginTop: '6px',
    lineHeight: '30px',
    fontFamily: font.raleway,
    fontWeight: 800,
  },
  textContent: {
    fontFamily: font.robotoCon,
    marginTop: '1rem',
    fontWeight: 400,
    fontSize: '1.1rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
  },
  CardStyle: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 250,
    borderBottomRightRadius: '40px',
    zIndex: 0,
  },
  brainspark: {
    position: 'absolute',
    zIndex: 0,
    right: 20,
    bottom: '-2.3rem',
  },
  brainsparkText: {
    textTransform: 'uppercase',
    fontSize: '6rem',
    fontWeight: 800,
    fontFamily: font.raleway,
    color: 'rgba(255, 255, 255, 0.4)',
  },
  time: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: (isMobile) => (isMobile ? 10 : 0),
  },
  timeContent: {
    marginLeft: 8,
    marginTop: (isMobile) => (isMobile ? 16 : 0),
    fontFamily: font.robotoCon,
    fontWeight: 600,
  },
  timeIcon: {
    fill: 'white',
  },
  timeIconWrapper: {
    height: '30px',
    width: '30px',
    background: color.red,
    marginTop: (isMobile) => (isMobile ? 16 : 0),
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default CardStyle;
