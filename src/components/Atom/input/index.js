import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel, MenuItem, Radio, RadioGroup, Select, TextField,
} from '@material-ui/core';
import MUIEditor, { MUIEditorState } from 'react-mui-draft-wysiwyg';
import React from 'react';
import PropTypes from 'prop-types';
import MomentUtils from '@date-io/moment';
import { nanoid } from 'nanoid';
import {
  DatePicker, KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider, TimePicker,
} from '@material-ui/pickers';
import { CheckBox } from '@material-ui/icons';
import InputStyle from './style';

const Input = ({
  type, data, placeholder, label, TimeOrDateInput, ...rest
}) => {
  const classes = InputStyle();

  const richEditorConfig = {
    editor: {
      wrapperElement: 'div',
      className: classes.textEditor,
    },
    toolbar: {
      style: {
        padding: 20,
      },
    },
  };
  switch (type) {
    case 'select':
      return (
        <FormControl className={classes.root}>
          <InputLabel id="select-label">{label}</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            className={classes.root}
            {...rest}
          >
            {data?.map((val) => <MenuItem key={nanoid()} value={val.value}>{val.name}</MenuItem>)}
          </Select>
        </FormControl>
      );
    case 'date':
      return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          {
            TimeOrDateInput
              ? (
                <KeyboardDatePicker
                  className={classes.root}
                  {...rest}
                  labe={label}
                />
              )
              : (
                <DatePicker
                  className={classes.root}
                  {...rest}
                  label={label}
                />
              )
          }
        </MuiPickersUtilsProvider>
      );
    case 'time':
      return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          {
            TimeOrDateInput
              ? (
                <KeyboardTimePicker
                  className={classes.root}
                  ampm={false}
                  placeholder="08:00 WIB"
                  mask="__:__ WIB"
                  {...rest}
                  label={label}
                />
              )
              : (
                <TimePicker
                  ampm={false}
                  className={classes.root}
                  {...rest}
                  label={label}
                />
              )
          }
        </MuiPickersUtilsProvider>
      );
    case 'radio':
      return (
        <FormControl component="fieldset" className={classes.root}>
          <FormLabel color="secondary" classes={{ root: classes.label, label: classes.label }}>{label}</FormLabel>
          <RadioGroup {...rest}>
            {
              data?.map((val) => (
                <FormControlLabel
                  value={val.value}
                  control={(
                    <Radio
                      classes={{ root: classes.input, checked: classes.checked }}

                    />
                    )}
                  label={val.name}
                />
              ))
            }
          </RadioGroup>
        </FormControl>
      );
    case 'checkbox':
      return (
        <FormGroup row>
          {
            data?.map((val) => (
              <FormControlLabel
                classes={{ label: classes.checkboxLabel }}
                control={(
                  <CheckBox
                    {...rest}
                    name={val.value}
                    color="primary"
                  />
            )}
                label={val.name}
              />
            ))
          }
        </FormGroup>

      );
    case 'rich-text-editor':
      return <MUIEditor config={richEditorConfig} editorState={MUIEditorState.createEmpty()} />;
    default: return (
      <TextField
        className={classes.root}
        placeholder={placeholder}
        label={label}
        type={type}
        {...rest}
        color="primary"
      />
    );
  }
};

Input.propTypes = {
  type: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
  TimeOrDateInput: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  type: '',
  data: [],
  TimeOrDateInput: false,
  placeholder: '',
  label: '',
};

export default Input;
