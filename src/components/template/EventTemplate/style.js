import { makeStyles } from "@material-ui/core/styles";

const DetailEventStyle = makeStyles(({ font: { raleway }, color }) => ({
  containerContent: {
    marginTop: ({ isPhone }) => (isPhone ? 0 : 50),
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: ({ isMedium }) => (isMedium ? "column" : "row"),
  },
  content: {
    maxWidth: ({ isMedium }) => (isMedium ? "100%" : "70%"),
    padding: "24px 0",
    borderRadius: 20,
    width: "100vh",
  },
  contentTitle: {
    fontFamily: raleway,
    fontWeight: 800,
    color: color.primaryText,
    padding: "10px 0",
    paddingTop: 0,
  },
  avatarImage: {
    height: "inherit",
    width: "inherit",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}));

export default DetailEventStyle;
