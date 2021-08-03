import React from 'react';
import {

  CardHeader, Avatar, IconButton,
} from '@material-ui/core';
import { Share } from '@material-ui/icons';
import HeaderStyle from './style';

const Header = () => {
  const classes = HeaderStyle();
  return (
    <CardHeader
      avatar={(
        <Avatar aria-label="recipe" className={classes.avatar}>
          A
        </Avatar>
  )}
      action={(
        <IconButton aria-label="settings">
          <Share />
        </IconButton>
  )}
      title="Anggit Nourislam, S.T."
      subheader="Senior software engineer"
    />
  );
};

export default Header;
