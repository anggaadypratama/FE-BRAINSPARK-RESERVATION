import React from 'react';
import { LoginBackgroundRight, LoginBackgroundLeft, IconLogo } from '@assets/image';
import { Card, Typography } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { InputFormAdmin } from '@components';
import PropTypes from 'prop-types';
import AttendanceStyle from './style';

const AttendancePage = () => {
  const classes = AttendanceStyle();

  const dummy = [
    { email: 'tatang' },
    { email: 'jdi' },
    { email: 'udin' },
    { email: 'asep' },
    { email: 'saep' },
    { email: 'ujang' },
    { email: 'marjinal' },
    { email: 'bujang' },
    { email: 'een' },
    { email: 'wwkw' },
    { email: 'jancok' },
  ];

  const TitleForm = ({ title, subtitle, helperText }) => (
    <>
      <div className={classes.titleFormWrapper}>
        <Typography className={classes.titleForm}>{title}</Typography>
        <span className={classes.subtitleForm}>
          <i>{subtitle}</i>
        </span>
      </div>
      <Typography className={classes.helperText}>
        <i>{helperText}</i>
      </Typography>
    </>
  );

  TitleForm.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    helperText: PropTypes.string,
  };

  TitleForm.defaultProps = {
    title: '',
    subtitle: '',
    helperText: '',
  };

  return (
    <div className={classes.root}>
      <div className={classes.wave}>
        <img src={LoginBackgroundRight} className={classes.waveRight} alt="wave right" />
        <img src={LoginBackgroundLeft} className={classes.waveLeft} alt="wave left" />
      </div>
      <div className={classes.content}>
        <Card className={classes.cardContent} elevation={3}>
          <div className={classes.header}>
            <img className={classes.logo} src={IconLogo} alt="logo-rplgdc" />
            <div className={classes.titleWrapper}>
              <Typography className={classes.title}>Give Feedback</Typography>
              <Typography className={classes.subtitle}>
                Beri kami pendapat anda tentang acara ini
              </Typography>
            </div>

          </div>
          <section className={classes.mainContent}>
            <Autocomplete
              id="search-email"
              options={dummy}
              getOptionLabel={({ email }) => email}
              renderInput={(params) => (
                <InputFormAdmin
                  {...params}
                  title={(
                    <TitleForm
                      title="Alamat Email"
                      subtitle="(Email Address)"
                      helperText="*(Masukan email yang sama dengan saat anda registrasi)"
                    />
                  )}
                />
              )}
            />
          </section>
        </Card>
      </div>
    </div>
  );
};

export default AttendancePage;
