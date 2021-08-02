import { CreateFormTemplate } from '@components';
import { Divider, Typography } from '@material-ui/core';
import React from 'react';
import CreateEventStyle from './style';

const CreateEventSection = () => {
  const classes = CreateEventStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Information</Typography>
      <Divider />
      <div className={classes.space} />
      <CreateFormTemplate />
    </div>
  );
};

export default CreateEventSection;
