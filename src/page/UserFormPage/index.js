import { EventTemplate } from '@/components';
import { Card } from '@material-ui/core';
import React from 'react';
import { Input } from '@components';
import UserFormStyle from './style';

const UserFormPage = () => {
  const classes = UserFormStyle();

  const data = [{
    value: 'Fakultas Ilmu Komunikasi',
    name: 'Fakultas Ilmu Komunikasi',
  }, {
    value: 'Fakultas Komunikasi Bisnis',
    name: 'Fakultas Komunikasi Bisnis',
  }, {
    value: 'Fakultas Ilmu Terapan',
    name: 'Fakultas Ilmu Terapan',
  }, {
    value: 'Fakultas Rekayasa Industri',
    name: 'Fakultas Rekayasa Industri',
  }, {
    value: 'Fakultas Teknik Elektro',
    name: 'Fakultas Teknik Elektro',
  },
  {
    value: 'Fakultas Informatika',
    name: 'Fakultas Informatika',
  },
  {
    value: 'Fakultas Ekonomi Bisnis',
    name: 'Fakultas Ekonomi Bisnis',
  },
  ];

  return (
    <EventTemplate>
      <Card className={classes.root} elevation={3}>
        <form className={classes.root}>
          <div className={classes.inputWrapper}>
            <Input
              label="Nama Lengkap"
              fullWidth
              placeholder="isi dengan benar"
              InputLabelProps={{
                shrink: true,
              }}
              id="standard-full-width"
            />
          </div>
          <div className={classes.inputWrapper}>
            <Input
              label="Email"
              fullWidth
              placeholder="isi dengan benar"
              InputLabelProps={{
                shrink: true,
              }}
              id="standard-full-width"
            />
          </div>
          <div className={classes.inputWrapper}>
            <Input
              label="NIM"
              fullWidth
              placeholder="isi dengan benar"
              InputLabelProps={{
                shrink: true,
              }}
              id="standard-full-width"
            />
          </div>
          <div className={classes.inputWrapper}>
            <Input
              label="Fakultas"
              data={data}
              type="radio"
              InputLabelProps={{
                shrink: true,
              }}
              id="standard-full-width"
            />
          </div>
        </form>
      </Card>
    </EventTemplate>
  );
};

export default UserFormPage;
