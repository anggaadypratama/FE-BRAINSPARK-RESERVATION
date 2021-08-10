/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import {
  Typography, Container, Card,
} from '@material-ui/core';

import {
  GetScreenSize,
} from '@assets';
import {
  Info,
  Header,
} from '@components';

import PropTypes from 'prop-types';
import DetailEventStyle from './style';
import GeneralUserTemplate from '../GeneralUserTemplate';

const EventTemplate = ({ children, dataContent }) => {
  const isMedium = GetScreenSize({ isMax: true, size: 900 });
  const isPhone = GetScreenSize({ isMax: true, size: 400 });
  const classes = DetailEventStyle({ isMedium, isPhone });

  const heading = isPhone ? 'h5' : 'h4';

  return (
    <>
      <GeneralUserTemplate>
        <Container maxWidth="md" className={classes.containerContent}>
          <Card elevation={0} className={classes.content}>
            <Typography variant={heading} className={classes.contentTitle}>
              {dataContent?.themeName}
            </Typography>
            <Header speaker={dataContent?.speakerName} />
            <section>
              {children}
            </section>
          </Card>
          <Info position="sticky" dataContent={dataContent} />
        </Container>
      </GeneralUserTemplate>
    </>
  );
};

EventTemplate.propTypes = {
  children: PropTypes.node,
  dataContent: PropTypes.objectOf(PropTypes.object),
};

EventTemplate.defaultProps = {
  children: '',
  dataContent: {},
};

export default EventTemplate;
