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
import { Button } from '@components';
import InputStyle from './style';

const Input = ({
  inputType, data, placeholder, label, TimeOrDateInput, accept, onChange, value, ...rest
}) => {
  const classes = InputStyle();

  const richEditorConfig = {
    editor: {
      wrapperElement: 'div',
      className: classes.textEditor,
    },
    toolbar: {
      className: classes.toolbarEditor,
    },
  };
  switch (inputType) {
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
                  value={value}
                  onChange={onChange}
                  {...rest}
                  label={label}
                />
              )
              : (
                <DatePicker
                  className={classes.root}
                  value={value}
                  onChange={onChange}
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
                  value={value}
                  onChange={onChange}
                />
              )
              : (
                <TimePicker
                  ampm={false}
                  className={classes.root}
                  {...rest}
                  label={label}
                  value={value}
                  onChange={onChange}
                />
              )
          }
        </MuiPickersUtilsProvider>
      );
    case 'radio':
      return (
        <FormControl component="fieldset" className={classes.root}>
          {label ?? <FormLabel color="secondary" classes={{ root: classes.label, label: classes.label }}>{label}</FormLabel>}
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
            data?.map((val) => {
              (val.name ||= '');

              return (
                <FormControlLabel
                  classes={{ label: classes.checkboxLabel }}
                  control={(
                    <CheckBox
                      {...rest}
                      name={val.name}
                      color="primary"
                    />
                )}
                  label={val.name}
                />
              );
            })
          }
        </FormGroup>

      );
    case 'editor': {
      return (
        <MUIEditor
          onChange={onChange}
          value={value}
          config={richEditorConfig}
          editorState={value || MUIEditorState.createEmpty(richEditorConfig)}
          {...rest}
        />
      );
    }

    case 'input': {
      return (
        <>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            hidden
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button {...rest} component="span">
              {label}
            </Button>
          </label>
        </>
      );
    }

    default: return (
      <TextField
        className={classes.root}
        placeholder={placeholder}
        label={label}
        type={inputType}
        value={value}
        onChange={onChange}
        {...rest}
        color="primary"
      />
    );
  }
};

Input.propTypes = {
  inputType: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
  TimeOrDateInput: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  accept: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType(
    [
      PropTypes.array,
      PropTypes.object,
      PropTypes.number,
      PropTypes.string],
  ),
};

Input.defaultProps = {
  inputType: '',
  data: [],
  TimeOrDateInput: false,
  placeholder: '',
  label: '',
  accept: '',
  onChange: () => {},
  value: '',
};

export default Input;
