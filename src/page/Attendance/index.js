import React, { useState, useEffect } from 'react';
import { LoginBackgroundRight, LoginBackgroundLeft, IconLogo } from '@assets/image';
import { Card, Typography } from '@material-ui/core';

import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import axios from 'axios';
import { GetScreenSize } from '@assets';
import AttendanceStyle from './style';
import { FormResponders, SearchEmail } from './section';

const AttendancePage = () => {
  const screenL = GetScreenSize({ isMax: true, size: 950 });
  const screenS = GetScreenSize({ isMax: true, size: 600 });

  const classes = AttendanceStyle({ screenL, screenS });

  const [searchEmail, setSearchEmail] = useState('');
  const [resultSearch, setResultSearch] = useState('');
  const [stepper, setStepper] = useState(0);

  const { data } = useQuery('fetchUsername', () => axios('https://jsonplaceholder.typicode.com/users'));
  const dataFiltered = searchEmail.length && data?.data?.find((val) => val.email === searchEmail);

  useEffect(() => {
    setResultSearch(dataFiltered);
  }, [dataFiltered]);

  const handleChange = (e) => {
    setSearchEmail(e.target.value);
  };

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

  const nextStep = () => setStepper((prev) => prev + 1);

  return (
    <div className={classes.root}>
      <div className={classes.wave}>
        {
          !screenS && (
          <>
            <img src={LoginBackgroundRight} className={classes.waveRight} alt="wave right" />
            <img src={LoginBackgroundLeft} className={classes.waveLeft} alt="wave left" />
          </>
          )
        }

      </div>
      <div className={classes.content}>
        <Card className={classes.cardContent} elevation={screenS ? 0 : 3}>
          {
            stepper !== 1 && (
            <div className={classes.header}>
              <img className={classes.logo} src={IconLogo} alt="logo-rplgdc" />
              <div className={classes.titleWrapper}>
                <Typography className={classes.title}>Give Feedback</Typography>
                <Typography className={classes.subtitle}>
                  Beri kami pendapat anda tentang acara ini
                </Typography>
              </div>

            </div>
            )
          }
          {
            stepper === 1 && (
            <div className={classes.greetingWrapper}>
              <div className={classes.logoWrapper}>
                <img className={classes.logoSecond} src={IconLogo} alt="logo-rplgdc" />
                <Typography className={classes.titleLogo}>RPL-GDC</Typography>
              </div>
              <Typography className={classes.message}>
                “Terimakasih atas partisipasi anda mengikuti
                acara Lab kami,  Kami sangat menghargai
                pendapat anda”
              </Typography>
            </div>
            )
          }

          <section className={classes.mainContent}>
            {
              stepper === 0 ? (
                <>
                  <SearchEmail
                    result={resultSearch}
                    handleChange={handleChange}
                    value={searchEmail}
                    handleNext={nextStep}
                    Title={(
                      <TitleForm
                        title="Alamat Email"
                        subtitle="(Email Address)"
                        helperText="*(Masukan email yang sama dengan saat anda registrasi)"
                      />
                    )}
                  />
                  <FormResponders
                    result={resultSearch}
                    value={searchEmail}
                    handleNext={nextStep}
                    Title={(
                      <TitleForm
                        title="Pesan & Kesan"
                        subtitle="(Message & Impression)"
                      />
                    )}
                  />
                </>
              )
                : ''
            }
          </section>
          {
            screenS && (
            <>
              <img src={LoginBackgroundRight} className={classes.waveRightCard} alt="wave right" />
              <img src={LoginBackgroundLeft} className={classes.waveLeftCard} alt="wave left" />
            </>
            )
          }
        </Card>
      </div>
    </div>
  );
};

export default AttendancePage;
