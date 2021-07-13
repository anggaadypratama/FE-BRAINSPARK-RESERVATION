/* eslint-disable import/no-unresolved */
import React from 'react';
import classNames from 'classnames';

import { Container, Grid, Typography } from '@material-ui/core';
import {
  CardItem, Navbar, Footer, Filter,
} from '@components';
import GetScreenSize from '@assets/breakpoints';

import ListEventStyle from './style';

const ListEventPage = () => {
  const screenSize = GetScreenSize({ isMax: true, size: 768 });
  const classes = ListEventStyle(screenSize);
  const backdropClassNames = classNames(classes.waveBackdrop);
  const waveJumbotronClassNames = classNames(classes.waveJumbotron);

  const dataFilter = [
    'All Events',
    'In This Month',
    'In This Week',
  ];

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
        <div className={classes.filter}>
          <span className={classes.totalItem}>Result : 4</span>
          <Filter data={dataFilter} onChange={(e) => e} />
        </div>
        <div className={classes.content}>
          <Grid container spacing={4}>
            <Grid item md={4}>
              <CardItem md={4} />
            </Grid>
            <Grid item md={4}>
              <CardItem />
            </Grid>
            <Grid item md={4}>
              <CardItem />
            </Grid>
            <Grid item md={4}>
              <CardItem editable />
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />

    </>
  );
};

export default ListEventPage;
