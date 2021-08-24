import {makeStyles} from "@material-ui/core/styles";

const FilterStyle = makeStyles(({color}) => ({
	buttonAction: {
		margin: "0 11px",
		textTransform: "capitalize",
		color: color.darkSilver,
		fontWeight: 500,
	},
	buttonActionActive: {
		background:
			"linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%);",
		color: "white",
	},
	buttonName: {
		marginLeft: 12,
	},
}));

export default FilterStyle;
