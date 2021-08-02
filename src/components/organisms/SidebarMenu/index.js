import React, { useEffect } from 'react';

// import ListIcon from '@material-ui/icons/List';
import {
  List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { nanoid } from 'nanoid';
// import { Link } from 'react-router-dom';
import SidebarMenuStyle from './style';

const SidebarMenu = ({ data }) => {
  const classes = SidebarMenuStyle();

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const history = useHistory();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const link = data[selectedIndex].path;
    history.push(`${link}`);
  }, [selectedIndex]);

  return (
    <div className={classes}>
      <Typography className={classes.titleMenu}>MAIN</Typography>
      <List component="nav" aria-label="page">
        {
          data?.map(({ name, Icon }, i) => (
            <ListItem
              key={nanoid()}
              classes={{ root: classes.listItem }}
              button
              selected={selectedIndex === i}
              onClick={(event) => handleListItemClick(event, i)}
            >
              <div className={classes.item}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </div>
            </ListItem>
          ))
        }
      </List>
    </div>
  );
};

SidebarMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
};

SidebarMenu.defaultProps = {
  data: [],
};

export default SidebarMenu;
