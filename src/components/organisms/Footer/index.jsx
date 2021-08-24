import React from "react";
import {Typography, IconButton} from "@material-ui/core";
import classNames from "classnames";
import {Instagram, Line} from "@assets/image";
import {NetworkImage} from "@components";
import FooterStyle from "./style";

const Footer = () => {
	const classes = FooterStyle();
	const contactClassnames = classNames(classes.contact, classes.content);
	const titleClassnames = classNames(classes.titleInformation, classes.content);
	const copyrightClassnames = classNames(classes.copyright, classes.content);

	return (
		<>
			<div className={classes.imgWave} alt="footer">
				<div className={classes.bottomContent}>
					<Typography variant="h6" className={titleClassnames}>
						FOR MORE INFORMATION
					</Typography>
					<div className={contactClassnames}>
						<IconButton>
							<NetworkImage src={Instagram} alt="instagram" />
						</IconButton>
						<IconButton>
							<NetworkImage src={Line} alt="line" />
						</IconButton>
					</div>
					<Typography className={copyrightClassnames}>
						© 2019 RPLGDC Laboratory, All Right Reserved
					</Typography>
				</div>
			</div>
		</>
	);
};

export default Footer;
