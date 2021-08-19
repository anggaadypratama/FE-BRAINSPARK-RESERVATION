import { makeStyles } from "@material-ui/core/styles";

const DataRespondersStyle = makeStyles(({ spacing, color, font }) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
  },
  pagination: {
    marginBottom: 10,
    marginRight: 20,
    marginTop: 20,
  },
  headTable: {
    backgroundColor: color.primary,
    color: "white",
    fontWeight: "800",
    fontFamily: font.raleway,
  },
  table: {
    fontFamily: font.raleway,
    paddingLeft: spacing(5),
    paddingRight: spacing(5),
  },
}));

export default DataRespondersStyle;
