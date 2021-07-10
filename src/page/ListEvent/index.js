/* eslint-disable import/no-unresolved */
import React from 'react';
import classNames from 'classnames';

import { Container, Typography, Grid } from '@material-ui/core';
import { CardItem, Navbar, Footer } from '@components';
import GetScreenSize from '@assets/breakpoints';

import ListEventStyle from './style';

const ListEvent = () => {
  const screenSize = GetScreenSize({ isMax: true, size: 768 });
  const classes = ListEventStyle(screenSize);
  const backdropClassNames = classNames(classes.waveBackdrop);
  const waveJumbotronClassNames = classNames(classes.waveJumbotron);

  return (
    <>
      <Navbar color="transparent" />
      <div className={backdropClassNames}>
        <div className={classes.titlePosition}>
          <Typography variant={screenSize ? 'h3' : 'h1'} className={classes.title}>
            BRAINSPARK
          </Typography>
        </div>
        <div className={waveJumbotronClassNames} />
      </div>
      <Container maxWidth="lg" className={classes.content}>
        <div className={classes.textCenter}>
          <Typography variant="h4">
            Latest brainspark
          </Typography>
        </div>
        <div className={classes.content}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={4}>
              <CardItem />
            </Grid>
            <Grid item lg={4} md={4}>
              <CardItem />
            </Grid>
            <Grid item lg={4} md={4}>
              <CardItem />
            </Grid>
            <Grid item lg={4} md={4}>
              <CardItem />
            </Grid>
          </Grid>

        </div>
      </Container>
      <Footer />

    </>
  );
};

export default ListEvent;
