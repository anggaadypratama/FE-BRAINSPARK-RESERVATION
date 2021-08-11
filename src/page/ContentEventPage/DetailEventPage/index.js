/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import {
  Typography,
} from '@material-ui/core';

import CONFIG from '@config';

import { NetworkImage } from '@components';

import DetailEventStyle from './style';

const DetailEventPage = ({ dataContent }) => {
  const classes = DetailEventStyle();
  const { description, imagePoster } = dataContent;

  return (
    <>
      <NetworkImage src={`${CONFIG.API_URL}/${imagePoster}`} className={classes.contentBanner} alt="content" />
      <div className={classes.contentDescWrapper}>
        <Typography className={classes.contentDesc} dangerouslySetInnerHTML={{ __html: description }} />
      </div>

    </>
  );
};
export default DetailEventPage;
