import {Sidebar} from "@components";
import {Container, LinearProgress} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import {useScreenSize} from "@assets";
import {useHistory} from "react-router";
import {useSelector} from "react-redux";
import DashboardStyle from "./style";

const DashboardTemplate = ({children, sidebarList}) => {
	const history = useHistory();
	const size = useScreenSize({isMax: true, size: 1100});
	const classes = DashboardStyle({
		size,
		responders: history.location.pathname === "/responders",
	});

	const loadingProgress = useSelector(
		({dashboardPage}) => dashboardPage.loadingProgress
	);

	return (
		<div className={classes.root}>
			<div className={classes.loadingProgress}>
				{loadingProgress > 0 && (
					<LinearProgress variant="determinate" value={loadingProgress} />
				)}
			</div>
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
