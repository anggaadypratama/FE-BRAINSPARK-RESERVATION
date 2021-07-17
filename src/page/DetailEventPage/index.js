/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import {
  Typography,
} from '@material-ui/core';

import { ContentImage } from '@assets';
import { EventTemplate } from '@components';

import DetailEventStyle from './style';

const DetailEventPage = () => {
  const classes = DetailEventStyle();
  return (
    <>
      <EventTemplate>
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
      </EventTemplate>
    </>
  );
};
export default DetailEventPage;
