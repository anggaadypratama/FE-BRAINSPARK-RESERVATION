import React from 'react';
import {

  Typography, Card, Divider,
} from '@material-ui/core';
import classNames from 'classnames';
import { Button } from '@components';
import GetScreenSize from '@assets/breakpoints';
import infoStyle from './style';

const Info = () => {
  const isMedium = GetScreenSize({ isMax: true, size: 900 });
  const classes = infoStyle(isMedium);

  const infoClassnames = classNames(isMedium ? classes.infoMobile : classes.info);

  return (
    <aside className={infoClassnames}>
      <Card className={classes.cardInfo}>
        <div className={classes.commonInfo}>
          <div>
            <Typography className={classes.titleInfo}>
              Time and Date
            </Typography>
            <Typography className={classes.textInfo}>
              Sun, 17 Mei 2021
            </Typography>
            <Typography className={classes.textInfo}>
              15.30-17.30 WIB
            </Typography>
          </div>
          <div>
            <Typography className={classes.titleInfo}>
              Location (Online)
            </Typography>
            <Typography className={classes.textInfo}>
              Microsoft Teams and Youtube
            </Typography>
          </div>
          <div>
            <Typography className={classes.titleInfo}>
              For
              {' '}
              <span className={classes.textInfo}>Mahasiswa</span>
            </Typography>

          </div>
        </div>
        <Divider />
        <div className={classes.registerInfo}>
          <div>
            <Typography className={classes.registerTitle}>
              Ticket
              {' '}
              <span className={classes.registerTextInfo}>0/100</span>
            </Typography>

          </div>
          <div className={classes.registerUntil}>
            <Typography className={classes.registerTitle}>
              Registration Until
            </Typography>
            <Typography className={classes.registerTextInfo}>
              17 Mei 2021
            </Typography>
          </div>
        </div>

        <Button type="primary" isFullWidth>Register</Button>
      </Card>

    </aside>
  );
};

export default Info;
