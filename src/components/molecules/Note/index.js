import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import NoteStyle from './style';

const Note = ({ children }) => {
  const classes = NoteStyle();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Note : </Typography>
      <Paper className={classes.content} variant="outlined">
        {children}
      </Paper>

    </div>
  );
};

Note.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Note;
