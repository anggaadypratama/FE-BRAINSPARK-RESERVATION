import { makeStyles } from "@material-ui/core/styles";

const DashboardStyle = makeStyles(({ color, font }) => ({
  "@global": {
    body: {
      backgroundColor: color.background,
    },
  },
  root: {
    width: "100%",
    height: "100vh",
  },
  content: {
    marginLeft: ({ size }) => (size ? 120 : 300),
    marginRight: ({ responders }) => (responders ? 25 : 100),
    position: "relative",
  },
  contentWrapper: {
    marginTop: 30,

    marginBottom: 50,
  },
  titleContent: {
    marginBottom: 20,
    fontWeight: 800,
    fontFamily: font.raleway,
    color: color.primaryText,
  },
  marginBottom: {
    width: "100%",
    height: 50,
  },
}));

export default DashboardStyle;
