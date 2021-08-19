import { makeStyles } from "@material-ui/core/styles";

const InputFormAdminStyle = makeStyles(({ spacing, color }) => ({
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
}));

export default InputFormAdminStyle;
