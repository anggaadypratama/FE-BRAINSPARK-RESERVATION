import React, {useState} from "react";
import {
	CardHeader,
	Avatar,
	IconButton,
	Popover,
	List,
	ListItemText,
	ListItemIcon,
	ListItem,
} from "@material-ui/core";
import {Share} from "@material-ui/icons";
import PropTypes from "prop-types";
import {Skeleton} from "@material-ui/lab";
import LinkIcon from "@material-ui/icons/Link";
import {ModalApp} from "@components";
import HeaderStyle from "./style";

const Header = ({speaker, isLoading}) => {
	const [openShare, setOpenShare] = useState(false);
	const [isCopy, setCopy] = useState(false);

	const handleClick = event => {
		setOpenShare(event.currentTarget);
	};

	const handleClose = () => {
		setOpenShare(null);
	};

	const handleCloseCopy = () => {
		setCopy(false);
	};

	const handleCopy = () => {
		if (navigator.clipboard && window.isSecureContext) {
			return navigator.clipboard.writeText(window.location.href).then(() => {
				setCopy(true);
			});
		}
		return false;
	};

	const open = Boolean(openShare);

	const classes = HeaderStyle();
	return (
		<>
			<ModalApp
				isActive={isCopy}
				handleClose={handleCloseCopy}
				title="Link Copied"
			/>
			<Popover
				open={open}
				onClose={handleClose}
				anchorEl={openShare}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<List component="nav" className={classes.root} aria-label="contacts">
					<ListItem button onClick={handleCopy}>
						<ListItemIcon>
							<LinkIcon />
						</ListItemIcon>
						<ListItemText primary="Link" />
					</ListItem>
				</List>
			</Popover>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{isLoading ? "?" : speaker[0]}
					</Avatar>
				}
				action={
					<IconButton aria-label="share" onClick={handleClick}>
						<Share />
					</IconButton>
				}
				title={isLoading ? <Skeleton animation="wave" /> : speaker}
				subheader="Speaker"
			/>
		</>
	);
};

Header.propTypes = {
	speaker: PropTypes.string,
	isLoading: PropTypes.bool,
};

Header.defaultProps = {
	speaker: "",
	isLoading: false,
};

export default Header;
