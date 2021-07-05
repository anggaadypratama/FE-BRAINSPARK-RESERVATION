import React from 'react';
import {
//   Typography,
//   Container,
  TextField,
  Card,
} from '@material-ui/core';
import { Button } from '../../components';
import LoginStyle from './style';
import { LoginBackgroundLeft, LoginBackgroundRight } from '../../assets/image';

const Login = () => {
  const classes = LoginStyle();

  return (
    <div className={classes.root}>
      <div className={classes.wave}>
        <img src={LoginBackgroundRight} className={classes.waveRight} alt="wave right" />
        <img src={LoginBackgroundLeft} className={classes.waveLeft} alt="wave left" />
      </div>
      <div className={classes.content}>
        <Card elevation={0} className={classes.formCard}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="outlined-basic" className={classes.formItem} label="Username" variant="outlined" />
            <TextField id="outlined-basic" className={classes.formItem} label="Password" variant="outlined" />
            <div className={classes.buttonWrapper}>
              <Button type="secondary">Login</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
