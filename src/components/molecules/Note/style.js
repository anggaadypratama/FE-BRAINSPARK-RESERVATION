import { makeStyles } from '@material-ui/core/styles';

const NoteStyle = makeStyles(({ font, color, spacing }) => ({
  root: {
    fontFamily: font.raleway,

    color: color.darkSilver,
  },
  title: {
    fontSize: 12,
    marginBottom: spacing(1),
  },
  content: {
    background: '#F5F6F7',
    padding: spacing(2),
  },
}));

export default NoteStyle;
