import {makeStyles} from "@material-ui/core/styles";

const InputFormAdminStyle = makeStyles(({spacing, color}) => ({
	root: {
		marginTop: 14,
	},
	inputFileWrapper: {
		padding: "8px 6px",
		display: "flex",
		alignItems: "center",
	},
	nameFile: {
		margin: spacing(0, 1),
		color: color.darkSilver,
	},
	copyButton: {
		backgroundColor: color.backgroundSecondary,
	},
	linkWrapper: {
		width: "100%",
		boxSizing: 'content-box',
		overflowX: 'auto',
		margin: "0 12px",

		'&::-webkit-scrollbar': {
			display: 'none'
		  },
	}
}));

export default InputFormAdminStyle;
