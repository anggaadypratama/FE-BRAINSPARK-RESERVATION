import { Card, Typography } from '@material-ui/core';
import React from 'react';
import { Input, Button, EventTemplate } from '@components';
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
        <Typography variant="h6" className={classes.formTitle}>Form Registrasi</Typography>
        <form className={classes.formWrapper}>
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
          <div className={classes.buttonWrapper}>
            <Button variant="transparent" className={classes.button}>cancel</Button>
            <Button type="primary" className={classes.button}>send</Button>
          </div>
        </form>
      </Card>
    </EventTemplate>
  );
};

export default UserFormPage;
