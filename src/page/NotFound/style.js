import {makeStyles} from "@material-ui/core/styles";

const NotFoundStyle = makeStyles(({color, font}) => ({
	root: {
		display: "grid",
		placeItems: "center",
		height: "100vh",
		width: "100%",
	},
	imageWrapper: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
	},
	description: {
		textAlign: "center",
		marginTop: 10,
		fontFamily: font.robotoCon,
		fontWeight: 400,
	},
	newDescription: {
		display: "block",
	},
	image: {
		width: ({isMobile}) => (isMobile ? 200 : 400),
		height: "inherit",
		position: "relative",
	},
	title: {
		marginTop: ({isMobile}) => (isMobile ? 0 : -50),
		textAlign: "center",
		color: color.dustyOrange,
		fontWeight: 800,
	},
	link: {
		marginTop: 20,
		textDecoration: "none",
	},
}));

export default NotFoundStyle;
