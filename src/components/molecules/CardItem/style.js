import { makeStyles } from '@material-ui/core/styles';

const CardStyle = makeStyles(({ color, font }) => ({
  card: {
    background: 'linear-gradient(3.55deg, #FEE8D0 37.62%, #FFF8F1 95.02%)',
    minHeight: '250px',
    borderRadius: 30,
    padding: 16,
    position: 'relative',
  },
  cardAction: {
    borderRadius: 40,
  },
  imageNormal: {
    width: '100%',
    height: 'inherit',
    borderRadius: 25,
    backgroundSize: 'cover',
  },
  contentWrapper: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    zIndex: 2,
  },
  content: {
    marginLeft: 0,
    marginTop: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 4,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  status: {
    textTransform: 'uppercase',
    color: color.primary,
    fontFamily: font.raleway,
    fontWeight: 700,
    lineHeight: '20px',
    fontSize: 18,
  },
  title: {
    marginTop: '6px',
    lineHeight: '21px',
    fontFamily: font.raleway,
    fontWeight: 700,
    fontSize: 18,
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
  item: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },
  itemSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,

    padding: '10px 0',
  },
  itemContent: {
    marginLeft: 8,
    fontSize: 16,

    fontFamily: font.robotoCon,
    fontWeight: 500,
  },
  itemIcon: {
    fill: 'white',
    height: 15,
    width: 15,
  },
  itemIconWrapper: {
    height: '25px',
    width: '25px',
    background: color.red,
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editable: {
    display: 'flex',
    width: '100%',
    padding: '8px 0',
  },
  buttonEditable: {
    width: '100%',
    padding: '10px 0',
  },
  buttonEditableText: {
    marginLeft: 6,
  },

}));

export default CardStyle;
