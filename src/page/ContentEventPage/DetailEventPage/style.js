import {makeStyles} from "@material-ui/core/styles";

const DetailEventStyle = makeStyles(
	({font: {robotoCon}, color: {paragraph}}) => ({
		contentBanner: {
			width: "100%",
			// marginTop: 20,
		},
		contentDescWrapper: {
			marginTop: 30,
			display: "flex",
			justifyContent: "center",
		},
		contentDesc: {
			maxWidth: " 600px",
			fontFamily: robotoCon,
			fontSize: ({isMedium}) => (isMedium ? "1rem" : "1.25rem"),
			fontWeight: 400,
			lineHeight: ({isMedium}) => (isMedium ? "28px" : "32px"),
			color: paragraph,
		},
		SkeletonWrapper: {
			display: "inline-block",
		},
	})
);

export default DetailEventStyle;
