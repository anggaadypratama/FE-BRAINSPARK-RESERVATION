import { makeStyles } from "@material-ui/core/styles";

const EmptyEventStyle = makeStyles(({ font }) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "grid",
    placeItems: "center",
  },
  message: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: font.robotoCon,
    fontWeight: 400,
  },
  title: {
    marginTop: ({ isMobile }) => (isMobile ? 0 : -50),
    textAlign: "center",
    background:
      " -webkit-linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%), -webkit-linear-gradient(0deg, #000000, #000000)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: 800,
  },
  messageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default EmptyEventStyle;
