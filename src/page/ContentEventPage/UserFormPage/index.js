/* eslint-disable react/no-danger */
import { Card, Typography } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import { Input, Button, Note } from '@components';
import GetScreenSize from '@assets/breakpoints/index';
import PropTypes from 'prop-types';
import { participantValidation } from '@config/yup';
import { Alert, AlertTitle } from '@material-ui/lab';
import { nanoid } from 'nanoid';
import { useHistory } from 'react-router';
import UserFormStyle from './style';
import data from './faculty';

const UserFormPage = ({ dataContent }) => {
  const isPhone = GetScreenSize({ isMax: true, size: 500 });
  const classes = UserFormStyle({ isPhone });
  const history = useHistory();

  const [errorForm, setErrorForm] = useState(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    isTelkomOnly: dataContent?.isOnlyTelkom,
    nim: 0,
    Status: '',
    fakultas: '',
    whatsapp: '',
    line: '',
  });

  const handleInputChange = useCallback((val) => (e) => {
    setForm({ ...form, [val]: e.target.value });

    if (e.target.value?.length) {
      setErrorForm(null);
    }
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationResult = await participantValidation
      .validate(form, { abortEarly: false })
      .catch(({ errors }) => {
        setErrorForm(errors);
      });

    if (validationResult) {
      const {
        isTelkomOnly,
        ...dataResult
      } = validationResult;
      console.log(dataResult);
    }
  };

  const handleCancel = () => {
    history.push('/');
  };

  return (

    <Card className={classes.root} elevation={isPhone ? 0 : 3}>
      <Typography variant="h6" className={classes.formTitle}>Form Registrasi Peserta Brainspark</Typography>
      <form className={classes.formWrapper} onSubmit={handleSubmit}>
        <div className={classes.inputWrapper}>
          <Input
            error={errorForm !== null}
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
            error={errorForm !== null}
            label="Email"
            inputType="email"
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
          form.isTelkomOnly ? (
            <>
              <div className={classes.inputWrapper}>
                <Input
                  error={errorForm !== null}
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
                  error={errorForm !== null}
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
                error={errorForm !== null}
                label="Status/lokasi (mahasiswa/kerja)"
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
        {
                (errorForm) && (
                <Alert classes={{ root: classes.alert }} severity="error" variant="filled">
                  <AlertTitle>Error</AlertTitle>
                  {
                    errorForm?.map((val) => <Typography key={nanoid()}>{val}</Typography>)
                  }
                </Alert>
                )
              }

        <div className={classes.buttonWrapper}>
          <Button variant="transparent" className={classes.button} onClick={handleCancel}>cancel</Button>
          <Button color="primary" className={classes.button} typebutton="submit">send</Button>
        </div>
      </form>
    </Card>
  );
};

UserFormPage.propTypes = {
  dataContent: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default UserFormPage;
