import React from 'react';

import {
  List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { nanoid } from 'nanoid';

import SidebarMenuStyle from './style';

const SidebarMenu = ({ data }) => {
  const classes = SidebarMenuStyle();

  const history = useHistory();

  return (
    <div className={classes}>
      <Typography className={classes.titleMenu}>MAIN</Typography>
      <List component="nav" aria-label="page">
        {
          data?.filter((val) => val.path !== '/edit/:id')?.map(({ name, Icon, path }) => (
            <ListItem
              key={nanoid()}
              classes={{ root: classes.listItem }}
              button
              selected={path === history?.location?.pathname}
              onClick={() => history.push(path)}
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
