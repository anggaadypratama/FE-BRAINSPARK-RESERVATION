import {makeStyles} from "@material-ui/core/styles";
import {waveJumboTron2} from "@assets/image";

const ListEventStyle = makeStyles(() => ({
	waveBackdrop: {
		width: "100%",
		backgroundPosition: "center center",
		backgroundImage: "cover",
		height: "125vh",
		background:
			"linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%)",
	},
	waveJumbotron: {
		position: "absolute",
		background: `url("${waveJumboTron2}")`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "bottom center",
		backgroundSize: 'cover',
		marginBottom: -280,
		height: "100vh",
		bottom: screenSize => (screenSize ? "-25vh" : "-30vh"),
		width: "100%",
	},
	titlePosition: {
		display: "flex",
		width: "100%",
		height: "100vh",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontFamily: "raleway",
		fontWeight: 700,
		color: "white",
	},
	titleEvent: {
		marginTop: 40,
		position: "relative",
		fontFamily: "raleway",
		fontWeight: 700,
		textAlign: "center",
		background:
			" -webkit-linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%), -webkit-linear-gradient(0deg, #000000, #000000)",
		"-webkit-background-clip": "text",
		"-webkit-text-fill-color": "transparent",
	},
}));

export default ListEventStyle;
