/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import {
  Typography, Container, Card,
} from '@material-ui/core';

import { GetScreenSize, ContentImage } from '@assets';
import {
  Footer, Navbar, Info, Header,
} from '@components';

import DetailEventStyle from './style';

const DetailEvent = () => {
  const isMedium = GetScreenSize({ isMax: true, size: 900 });
  const isPhone = GetScreenSize({ isMax: true, size: 400 });
  const classes = DetailEventStyle({ isMedium, isPhone });

  const heading = isPhone ? 'h5' : 'h4';

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" className={classes.containerContent}>
        <Card elevation={0} className={classes.content}>
          <Typography variant={heading} className={classes.contentTitle}>
            SOLID Rest API for Web Development
          </Typography>
          <Header />
          <img src={ContentImage} className={classes.contentBanner} alt="content" />

          <div className={classes.contentDescWrapper}>
            <Typography className={classes.contentDesc}>
              [GENERAL BRAINSPARK RPLGDC 2020]
              Halo, sobat software! Gimana nih puasanya? Apalagi disaat-saat seperti ini pasti jenuh dirumah ga ngapa-ngapain kan? Nah dari pada gabut, mending ikutan yuk Brainspark dari RPL-GDC yaitu "Produktif di masa pandemi dan apa yang harus dipersiapkan untuk bisa bekerja di luar negeri" bersama kak Primawan Satrio Bindono dari Inbound Technology Co.Ltd., Japan. Kegiatan ini bersifat sharing  diskusi, dan tentunya GRATIS dan terbuka untuk UMUM.

              Selain sambil ngabuburit tentunya buat nambah insight dan ilmu baru buat teman-teman. Nah tunggu apa lagi, buruan daftar dan ajak teman-teman kalian ya.
              #RPLGDC
              #BRAINSPARK
              #TELKOMUNIVERSITY
            </Typography>
          </div>

        </Card>
        <Info />
      </Container>
      <Footer />
    </>
  );
};

export default DetailEvent;
