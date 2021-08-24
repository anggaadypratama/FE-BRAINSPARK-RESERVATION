import {makeStyles} from "@material-ui/core/styles";

const CreateEventStyle = makeStyles(({color}) => ({
	space: {
		height: 14,
		width: "100%",
	},
	title: {
		textTransform: "uppercase",
		marginBottom: 8,
		color: color.primary,
		fontWeight: 700,
		textAlign: "center",
	},
	root: {
		position: "relative",
		top: -10,
	},
}));

export default CreateEventStyle;
