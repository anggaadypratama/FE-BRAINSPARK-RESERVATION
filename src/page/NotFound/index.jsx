import { RocketNotFound } from '@assets';
import { Button } from '@components';
import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import GetScreenSize from '@assets/breakpoints';
import NotFoundStyle from './style';

const NotFound = () => {
  const isMobile = GetScreenSize({ isMax: true, size: 500 });
  const classes = NotFoundStyle({ isMobile });

  const handleOnclick = () => ('token' in localStorage) && localStorage.removeItem('token');

  return (
    <div className={classes.root}>

      <div className={classes.imageWrapper}>
        <img src={RocketNotFound} className={classes.image} alt="rocket not found" />
        {isMobile ? (
          <section>
            <Typography variant="h3" className={classes.title}>404</Typography>
          </section>
        )
          : <Typography variant="h2" className={classes.title}>404</Typography>}
        <Typography className={classes.description}>
          opps!!! looks like you got lost
          {' '}
          <span className={classes.newDescription}>let&apos;s go back again!!!</span>
        </Typography>
        <Link to="/" className={classes.link}>
          <Button color="primary" onClick={handleOnclick}>go back!!!</Button>
        </Link>

      </div>

    </div>
  );
};

export default NotFound;
