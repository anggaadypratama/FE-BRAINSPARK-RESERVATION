import {makeStyles} from "@material-ui/core/styles";

const RplGdcLogoStyle = makeStyles(({color}) => ({
	heading: {
		display: "flex",
		alignItems: "center",
		marginBottom: 36,
	},
	headingInfo: {
		display: "block",
		marginLeft: 8,
	},
	logo: {
		height: 45,
		width: 45,
	},
	headText: {
		fontWeight: "800",
		fontSize: "21px",
	},
	subHeadText: {
		color: color.dustyOrange,
		fontSize: "14px",
		fontWeight: "800",
	},
}));

export default RplGdcLogoStyle;
