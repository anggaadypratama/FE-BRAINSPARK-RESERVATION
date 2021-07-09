import { makeStyles } from '@material-ui/core/styles';
import { FooterWave } from '../../../assets/image';

const FooterStyle = makeStyles(({ color, font }) => ({
  imgWave: {
    backgroundImage: `url("${FooterWave}")`,
    height: 464,
    width: '100%',
    position: 'relative',
    bottom: '-5vh',
    marginTop: 200,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  },
  bottomContent: {
    color: color.sandyBeach,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    alignItems: 'center',
    bottom: '1em',
    right: 0,
    left: 0,
    fontFamily: font.raleway,

  },
  titleInformation: {
    fontWeight: 800,
    fontSize: '1.125rem',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '1rem',
    textAlign: 'center',
  },
  contact: {

  },
  content: {
    marginBottom: '0.1em',
  },
}));

export default FooterStyle;
