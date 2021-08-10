import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { GetScreenSize } from '@assets';
import EmptyEventStyle from './style';

const EmptyEvent = ({ message }) => {
  const isMobile = GetScreenSize({ isMax: true, size: 500 });
  const classes = EmptyEventStyle({ isMobile });
  return (
    <div className={classes.root}>
      <div className={classes.messageWrapper}>
        <Typography variant={isMobile ? 'h3' : 'h2'} className={classes.title}>NOTHING!!!</Typography>
        <Typography className={classes.message}>{message}</Typography>
      </div>
    </div>
  );
};

EmptyEvent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default EmptyEvent;
