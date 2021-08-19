import { makeStyles } from "@material-ui/core/styles";

const listCardStyle = makeStyles(() => ({
  content: {
    marginTop: 50,
  },
  filter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: ({ mobileSize }) => (mobileSize ? "column" : "row"),
  },
  totalItem: {
    marginBottom: ({ mobileSize }) => (mobileSize ? 20 : 0),
    marginRight: 30,
  },
}));

export default listCardStyle;
