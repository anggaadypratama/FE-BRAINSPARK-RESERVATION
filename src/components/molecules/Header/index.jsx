import React from 'react';
import {

  CardHeader, Avatar, IconButton,
} from '@material-ui/core';
import { Share } from '@material-ui/icons';
import PropTypes from 'prop-types';
import HeaderStyle from './style';

const Header = ({ speaker }) => {
  const classes = HeaderStyle();
  return (
    <CardHeader
      avatar={(
        <Avatar aria-label="recipe" className={classes.avatar}>
          {speaker[0]}
        </Avatar>
  )}
      action={(
        <IconButton aria-label="settings">
          <Share />
        </IconButton>
  )}
      title={speaker}
      subheader="Speaker"
    />
  );
};

Header.propTypes = {
  speaker: PropTypes.string,
};

Header.defaultProps = {
  speaker: '',
};

export default Header;
