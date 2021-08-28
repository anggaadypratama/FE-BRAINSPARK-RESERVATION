import {Fade, Modal, Backdrop, Typography, Card} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import {Button} from "@components/Atom";
import classNames from "classnames";
import ModalStyle from "./style";

const ModalApp = ({
	children,
	isActive,
	handleClose,
	title,
	actionButtonClick,
	hasActionButton,
	actionButtonName,
	className,
}) => {
	const classes = ModalStyle();
	const cardClassname = classNames(className, classes.paper);
	const buttonCloseClassname = classNames(
		hasActionButton && classes.buttonClose,
		classes.button
	);

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={isActive}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={isActive}>
				<Card className={cardClassname}>
					<Typography
						id="transition-modal-title"
						className={classes.title}
						variant="h6"
					>
						{title}
					</Typography>
					<Typography
						id="transition-modal-description"
						className={classes.children}
					>
						{children}
					</Typography>
					<div className={classes.buttonActionWrapper}>
						<Button
							className={buttonCloseClassname}
							color={!hasActionButton ? "primary" : ""}
							onClick={handleClose}
						>
							Close
						</Button>
						{hasActionButton && (
							<Button
								className={classes.button}
								color="primary"
								onClick={actionButtonClick}
							>
								{actionButtonName}
							</Button>
						)}
					</div>
				</Card>
			</Fade>
		</Modal>
	);
};

ModalApp.propTypes = {
	children: PropTypes.node,
	isActive: PropTypes.bool,
	handleClose: PropTypes.func,
	title: PropTypes.string,
	actionButtonClick: PropTypes.func,
	hasActionButton: PropTypes.bool,
	actionButtonName: PropTypes.string,
	className: PropTypes.string,
};

ModalApp.defaultProps = {
	children: "",
	isActive: false,
	handleClose: () => {},
	title: "",
	actionButtonClick: () => {},
	hasActionButton: false,
	actionButtonName: "",
	className: "",
};

export default ModalApp;
