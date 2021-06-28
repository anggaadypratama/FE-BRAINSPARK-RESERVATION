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
          <div style={{ backgroundImage: `url("${'https://upload.wikimedia.org/wikipedia/commons/6/6b/Sundar_Pichai_WEF_2020.png'}")` }} className={classes.avatarImage} />
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
