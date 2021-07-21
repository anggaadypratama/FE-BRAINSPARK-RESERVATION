/* eslint-disable import/no-unresolved */
import React from 'react';
import classNames from 'classnames';

import { Container, Typography } from '@material-ui/core';
import {
  Navbar, Footer,
  ListCard,
} from '@components';
import GetScreenSize from '@assets/breakpoints';
import { withRouter } from 'react-router-dom';
import ListEventStyle from './style';

// eslint-disable-next-line react/prop-types
const ListEventPage = ({ history }) => {
  const screenSize = GetScreenSize({ isMax: true, size: 768 });
  const classes = ListEventStyle(screenSize);
  const backdropClassNames = classNames(classes.waveBackdrop);
  const waveJumbotronClassNames = classNames(classes.waveJumbotron);

  console.log(history);

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
      <Container maxWidth="lg">
        <ListCard dataFilter={dataFilter} />
      </Container>
      <Footer />

    </>
  );
};

export default withRouter(ListEventPage);
