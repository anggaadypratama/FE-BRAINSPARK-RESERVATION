import React from 'react';
import classNames from 'classnames';

import { Container, Typography } from '@material-ui/core';
import { Navbar, Footer } from '../../components/organisms';
import { CardItem } from '../../components/molecules';
import { waveJumboTron } from '../../assets/image';

import ListEventStyle from './style';
import GetScreenSize from '../../assets/breakpoints/index';

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
        <img src={waveJumboTron} className={waveJumbotronClassNames} alt="jumbotron bottom" />
      </div>
      <Container maxWidth="md" className={classes.content}>
        <div className={classes.textCenter}>
          <Typography variant="h4">
            Latest brainspark
          </Typography>
        </div>
        <div className={classes.content}>
          <CardItem />
        </div>
      </Container>
      <Footer />

    </>
  );
};

export default ListEvent;
