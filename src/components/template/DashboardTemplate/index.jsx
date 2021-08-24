import {Sidebar} from "@components";
import {Container} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import {useScreenSize} from "@assets";
import {useHistory} from "react-router";
import DashboardStyle from "./style";

const DashboardTemplate = ({children, sidebarList}) => {
	const history = useHistory();
	const size = useScreenSize({isMax: true, size: 1100});
	const classes = DashboardStyle({
		size,
		responders: history.location.pathname === "/responders",
	});

	return (
		<div className={classes.root}>
			<Sidebar list={sidebarList} size={size} />
			<div className={classes.content}>
				<Container>
					<div className={classes.contentWrapper}>
						{children}
						<div className={classes.marginBottom} />
					</div>
				</Container>
			</div>
		</div>
	);
};

DashboardTemplate.propTypes = {
	children: PropTypes.node,
	sidebarList: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	),
};

DashboardTemplate.defaultProps = {
	children: "",
	sidebarList: [],
};

export default DashboardTemplate;
