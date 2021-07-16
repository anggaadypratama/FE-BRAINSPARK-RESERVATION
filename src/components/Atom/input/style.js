import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
const InputStyle = makeStyles(({ color }) => ({
  root: {
    margin: '8px 0',
  },
  input: {
    '&$checked': {
      color: color.dustyOrange,
    },
  },
  checked: {},
  label: {
    fontSize: 13,
    marginBottom: 10,
    '&.Mui-focused': {
      color: color.dustyOrange,
    },
  },
  notchedOutline: {
    border: `2px solid ${color.dustyOrange}`,
  },
  checkboxLabel: {
    marginLeft: 5,
  },
  textEditor: {
    border: '2px solid #949494',
    borderRadius: 5,
    '&$focused': {
      border: `2px solid ${color.primary}`,
    },
  },
  textEditorToolbar: {
    padding: 20,
    background: color.primary,
    color: 'white',
  },
}));

export default InputStyle;
