/* eslint-disable react/no-danger */
import { Card, Typography } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import { Input, Button, Note } from '@components';
import GetScreenSize from '@assets/breakpoints/index';
import PropTypes from 'prop-types';
import UserFormStyle from './style';
import data from './faculty';

const UserFormPage = ({ dataContent }) => {
  const isPhone = GetScreenSize({ isMax: true, size: 500 });
  const classes = UserFormStyle({ isPhone });

  const isTelkomOnly = dataContent?.isOnlyTelkom;

  const [form, setForm] = useState({
    name: '',
    email: '',
    nim: 0,
    Status: '',
    fakultas: '',
    whatsapp: '',
    line: '',
  });

  // eslint-disable-next-line no-unused-vars
  const handleInputChange = useCallback((val) => (e) => {
    setForm({ ...form, [val]: e.target.value });
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <Card className={classes.root} elevation={isPhone ? 0 : 3}>
      <Typography variant="h6" className={classes.formTitle}>Form Registrasi Peserta Brainspark</Typography>
      <form className={classes.formWrapper} onSubmit={handleSubmit}>
        <div className={classes.inputWrapper}>
          <Input
            label="Nama Lengkap"
            fullWidth
            placeholder="isi dengan benar"
            InputLabelProps={{
              shrink: true,
            }}
            id="standard-full-width"
            value={form.name}
            onChange={handleInputChange('name')}
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
            value={form.email}
            onChange={handleInputChange('email')}
          />
        </div>
        {
          isTelkomOnly ? (
            <>
              <div className={classes.inputWrapper}>
                <Input
                  label="NIM"
                  fullWidth
                  placeholder="isi dengan benar"
                  inputType="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="standard-full-width"
                  value={form.nim}
                  onChange={handleInputChange('nim')}
                />
              </div>
              <div className={classes.inputWrapper}>
                <Input
                  label="Fakultas"
                  data={data}
                  inputType="radio"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="standard-full-width"
                  value={form.fakultas}
                  onChange={handleInputChange('fakultas')}
                />
              </div>
            </>
          ) : (
            <div className={classes.inputWrapper}>
              <Input
                label="Status (mahasiswa/kerja)"
                fullWidth
                placeholder="isi dengan benar"
                InputLabelProps={{
                  shrink: true,
                }}
                id="standard-full-width"
                value={form.Status}
                onChange={handleInputChange('Status')}
              />
            </div>
          )
        }
        <div className={classes.inputWrapper}>
          <Input
            label="Whatsapp Number"
            fullWidth
            placeholder="isi dengan benar"
            inputType="number"
            InputLabelProps={{
              shrink: true,
            }}
            id="standard-full-width"
            value={form.whatsapp}
            onChange={handleInputChange('whatsapp')}
          />
        </div>
        <div className={classes.inputWrapper}>
          <Input
            label="Line ID"
            fullWidth
            placeholder="isi dengan benar"
            InputLabelProps={{
              shrink: true,
            }}
            id="standard-full-width"
            value={form.line}
            onChange={handleInputChange('line')}
          />
        </div>
        <Note>
          <div dangerouslySetInnerHTML={{ __html: dataContent?.note }} />
        </Note>

        <div className={classes.buttonWrapper}>
          <Button variant="transparent" className={classes.button}>cancel</Button>
          <Button color="primary" className={classes.button}>send</Button>
        </div>
      </form>
    </Card>
  );
};

UserFormPage.propTypes = {
  dataContent: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default UserFormPage;
