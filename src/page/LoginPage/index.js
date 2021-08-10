/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Card,
  Typography,
} from '@material-ui/core';
import { Button, RplGdcLogo, Loading } from '@components';
import { LoginBackgroundLeft, LoginBackgroundRight } from '@assets/image';
import { Input } from '@components/Atom';
import { login } from '@services';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router';
import { Alert, AlertTitle } from '@material-ui/lab';
import { loginValidation } from '@config/yup';
import { nanoid } from 'nanoid';
import LoginStyle from './style';

// eslint-disable-next-line no-unused-vars
const LoginPage = () => {
  const classes = LoginStyle();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [errorForm, setErrorForm] = useState(null);

  const {
    data, isLoading, mutate, error,
  } = useMutation((props) => login(props));

  const token = data?.data?.data;
  const errorData = error?.response?.data;

  if (token) {
    localStorage.setItem('token', token);
  }

  const handleFormInput = (type) => (e) => {
    if (e.target.value.length) {
      setErrorForm(null);
    }

    setForm({
      ...form,
      [type]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultCheck = await loginValidation
      .validate(form, { abortEarly: false })
      .catch(({ errors }) => {
        setErrorForm(errors);
      });

    if (resultCheck) {
      setErrorForm(null);
      mutate(resultCheck);
    }
  };

  return (
    <>
      <Loading hasBackdrop isActive={isLoading} />
      {
        'token' in localStorage
        && !isLoading
        && <Redirect to="/dashboard" />
      }
      <div className={classes.root}>
        <div className={classes.wave}>
          <img src={LoginBackgroundRight} className={classes.waveRight} alt="wave right" />
          <img src={LoginBackgroundLeft} className={classes.waveLeft} alt="wave left" />
        </div>
        <div className={classes.content}>
          <RplGdcLogo className={classes.wrapperlogo} />
          <Card elevation={0} className={classes.formCard}>
            <Typography className={classes.title}>Login as Admin</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Input
                error={errorForm !== null || errorData?.message?.username}
                variant="outlined"
                inputType="text"
                value={form.username}
                className={classes.formItem}
                label="username"
                onChange={handleFormInput('username')}
              />
              <Input
                error={errorForm !== null || errorData?.message?.password}
                variant="outlined"
                inputProps={{
                  autocomplete: 'new-password',
                  form: {
                    autocomplete: 'off',
                  },
                }}
                inputType="password"
                value={form.password}
                className={classes.formItem}
                label="password"
                onChange={handleFormInput('password')}
              />
              {
                (errorForm || errorData) && (
                <Alert classes={{ root: classes.alert }} severity="error" variant="filled">
                  <AlertTitle>Error</AlertTitle>
                  <ul>
                    {
                    errorForm?.map((val) => (
                      <li>
                        <Typography key={nanoid()}>{val}</Typography>
                      </li>
                    ))
                  }
                    {
                    errorData && (
                    <>
                      {
                      errorData?.message?.username && (
                      <li>
                        { errorData?.message?.username}
                      </li>
                      )
                    }
                      {
                      errorData?.message?.password && (
                      <li>
                        { errorData?.message?.password}
                      </li>
                      )
                    }

                    </>
                    )
                  }

                  </ul>
                </Alert>
                )
              }
              <div className={classes.buttonWrapper}>
                <Button className={classes.buttonLogin} color="secondary-gradient">Login</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
