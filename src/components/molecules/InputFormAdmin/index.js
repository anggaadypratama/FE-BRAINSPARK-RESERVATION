import { Input } from '@components/Atom';
import { Typography, Paper } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputFormAdminStyle from './style';

const InputFormAdmin = ({
  title, type, className, error, ...rest
}) => {
  const classes = InputFormAdminStyle();
  const classInputWrapper = classNames(className, classes.root);

  return (
    <div className={classInputWrapper}>
      <Typography>{title}</Typography>
      {
        type === 'file' ? (
          <Paper variant="outlined" className={classes.inputFileWrapper}>
            <Input variant="outlined" error={error} inputType={type} {...rest} />
            <Typography className={classes.nameFile}>{rest.value?.name || 'File Not Found' }</Typography>
          </Paper>
        ) : <Input variant="outlined" error={error} inputType={type} {...rest} />
      }

    </div>
  );
};

InputFormAdmin.propTypes = {
  title: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
};

InputFormAdmin.defaultProps = {
  title: '',
  type: '',
  className: '',
  error: false,
};

export default InputFormAdmin;
