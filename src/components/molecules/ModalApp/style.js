import { makeStyles } from "@material-ui/core/styles";

const ModalStyle = makeStyles(({ color, palette, spacing, shadows, font }) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    borderRadius: 10,
    backgroundColor: palette.background.paper,
    boxShadow: shadows[5],
    padding: spacing(2, 3),
  },
  title: {
    marginBottom: spacing(2),
    color: color.primary,
    fontFamily: font.raleway,
    fontWeight: 700,
  },
  buttonActionWrapper: {
    marginTop: spacing(2),
    width: "100%",
    padding: spacing(1, 1, 1, 0),
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonClose: {
    color: color.primary,
  },
  button: {
    margin: "0px 8px",
  },
  children: {
    fontFamily: font.robotoCon,
  },
}));

export default ModalStyle;
