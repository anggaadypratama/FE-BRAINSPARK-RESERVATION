import {makeStyles} from "@material-ui/core/styles";

const DashboardContentStyle = makeStyles(({font, color, spacing}) => ({
	titleContent: {
		marginBottom: 20,
		fontWeight: 800,
		fontFamily: font.raleway,
		color: color.primaryText,
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

export default DashboardContentStyle;
