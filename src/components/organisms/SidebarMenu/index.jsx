import React from "react";

import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import {useHistory} from "react-router";
import {nanoid} from "nanoid";

import SidebarMenuStyle from "./style";

const SidebarMenu = ({data, size}) => {
	const classes = SidebarMenuStyle({size});

	const history = useHistory();

	return (
		<div>
			<Typography className={classes.titleMenu}>MAIN</Typography>
			<List component="nav" aria-label="page">
				{data
					?.filter(val => val.path !== "/edit/:id")
					?.map(({name, Icon, path}) => (
						<ListItem
							key={nanoid()}
							classes={{root: classes.listItem}}
							button
							selected={path === history?.location?.pathname}
							onClick={() => history.push(path)}
						>
							<div className={classes.item}>
								<ListItemIcon>
									<Icon />
								</ListItemIcon>
								{!size && <ListItemText primary={name} />}
							</div>
						</ListItem>
					))}
			</List>
		</div>
	);
};

SidebarMenu.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.object, PropTypes.string])
	),
	size: PropTypes.bool,
};

SidebarMenu.defaultProps = {
	data: [],
	size: false,
};

export default SidebarMenu;
