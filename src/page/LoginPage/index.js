import React from 'react';
import {
//   Typography,
//   Container,
  TextField,
  Card,
  Typography,
} from '@material-ui/core';
import { Button } from '@components';
import { LoginBackgroundLeft, LoginBackgroundRight, IconLogo } from '@assets/image';
import LoginStyle from './style';

const LoginPage = () => {
  const classes = LoginStyle();

  return (
    <div className={classes.root}>
      <div className={classes.wave}>
        <img src={LoginBackgroundRight} className={classes.waveRight} alt="wave right" />
        <img src={LoginBackgroundLeft} className={classes.waveLeft} alt="wave left" />
      </div>
      <div className={classes.content}>
        <div className={classes.heading}>
          <div className={classes.headingIcon}>
            <img className={classes.logo} src={IconLogo} alt="icon logo" />
          </div>
          <div className={classes.headingInfo}>
            <Typography className={classes.headText}>RPL-GDC</Typography>
            <Typography className={classes.subHeadText}>Admin</Typography>
          </div>
        </div>
        <Card elevation={0} className={classes.formCard}>
          <Typography className={classes.title}>Login as Admin</Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="outlined-basic" className={classes.formItem} label="Username" variant="outlined" />
            <TextField id="outlined-basic" className={classes.formItem} label="Password" variant="outlined" />
            <div className={classes.buttonWrapper}>
              <Button className={classes.buttonLogin} type="secondary-gradient">Login</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
