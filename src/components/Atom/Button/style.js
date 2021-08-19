import { makeStyles } from "@material-ui/core/styles";

const buttonStyle = makeStyles((theme) => ({
  root: {
    fontFamily: theme.font.raleway,
    fontWeight: 800,
    padding: "8px 22px",
    borderRadius: 5,
    minWidth: 100,
  },
  primary: {
    background:
      "linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%)",
    transition: "all .3s ease-in-out",
    color: "white",
  },
  secondaryGradient: {
    background:
      "linear-gradient(68.21deg, #EE9423 12.88%, #F15E56 98.79%), #C4C4C4",
    transition: "all .3s ease-in-out",
    color: "white",
  },
  secondary: {
    backgroundColor: theme.color.tequila,
    transition: "all .3s ease-in-out",
    color: theme.color.dustyOrange,
  },
  transparent: {
    color: theme.color.red,
  },
  fullWidth: {
    width: "100%",
  },
  linkButton: {
    textDecoration: "none",

    "&:hover": {
      textDecoration: "none",
    },
  },
  disabled: {
    "-webkit-filter": "grayscale(1)",
  },
}));

export default buttonStyle;
