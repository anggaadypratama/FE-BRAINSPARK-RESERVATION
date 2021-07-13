import { EventTemplate } from '@/components';
import { Card, TextField } from '@material-ui/core';
import React from 'react';
import UserFormStyle from './style';

const UserFormPage = () => {
  const classes = UserFormStyle();
  return (
    <EventTemplate>
      <Card className={classes.root}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Card>
    </EventTemplate>
  );
};

export default UserFormPage;
