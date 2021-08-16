import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { PropTypes } from 'prop-types';

const ListData = ({
  Icon, title, onClick, index,
}) => {
  const handleItemClick = (event, i) => {
    onClick(i);
  };
  return (
    <ListItem
      button
      selected={0}
      onClick={(e) => handleItemClick(e, index)}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
};

ListData.propTypes = {
  Icon: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
  index: PropTypes.number,
};

ListData.defaultProps = {
  Icon: '',
  title: '',
  onClick: () => {},
  index: 0,
};

export default ListData;
