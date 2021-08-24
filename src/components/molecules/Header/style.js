import {makeStyles} from "@material-ui/core/styles";

const HeaderStyle = makeStyles(() => ({
	avatarImage: {
		height: "inherit",
		width: "inherit",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	},
	avatar: {
		textTransform: "uppercase",
	},
}));

export default HeaderStyle;
