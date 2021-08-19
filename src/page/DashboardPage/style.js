import { makeStyles } from "@material-ui/core/styles";

const DashboardPageStyle = makeStyles(({ spacing }) => ({
  cardStyle: {
    padding: "0 !important",
  },
  cardContent: {
    borderRadius: 20,
    padding: spacing(5),
    width: "100%",
    minHeight: "80vh",
  },

  cardContentResponders: {
    width: "100%",
    minHeight: "10vh",
    borderRadius: 10,
  },
  containerRespondersRoot: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export default DashboardPageStyle;
