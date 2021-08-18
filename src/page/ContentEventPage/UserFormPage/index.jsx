/* eslint-disable react/no-danger */
import { Card, Typography } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import {
  Input, Button, Note, Loading,
  ModalApp,
} from '@components';
import GetScreenSize from '@assets/breakpoints/index';
import PropTypes from 'prop-types';
import { participantValidation } from '@helpers/yup';
import { Alert, AlertTitle } from '@material-ui/lab';
import { nanoid } from 'nanoid';
import { useHistory, useParams } from 'react-router';
import { useMutation } from 'react-query';
import { putEventParticipant } from '@services';

import UserFormStyle from './style';
import data from './faculty';

const UserFormPage = ({ dataContent }) => {
  const isPhone = GetScreenSize({ isMax: true, size: 500 });
  const classes = UserFormStyle({ isPhone });
  const { id } = useParams();
  const history = useHistory();

  const mutation = useMutation((props) => putEventParticipant(`${id}/participant`, props));

  const [errorForm, setErrorForm] = useState(null);
  const [modal, setModal] = useState(true);

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
      mutation.mutate(dataResult);
    }
  };

  const handleCancel = () => {
    history.push('/');
  };

  const handleCloseModal = () => {
    setModal(false);
    history.push('/');
  };

  return (
    <>
      <Loading
        hasBackdrop
        isActive={mutation.isLoading}
      />
      {
        mutation.isSuccess && (
        <ModalApp
          isActive={modal}
          title="Register berhasil"
          handleClose={handleCloseModal}
        >
          You have successfully registered
        </ModalApp>
        )
      }
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
                  checked={form.fakultas}
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
                (errorForm || mutation?.isError) && (
                <Alert classes={{ root: classes.alert }} severity="error" variant="filled">
                  <AlertTitle>Error</AlertTitle>
                  <ul>
                    {
                    errorForm && errorForm?.map((val) => (
                      <li>
                        <Typography key={nanoid()}>{val}</Typography>
                      </li>
                    ))
                  }
                    {mutation?.isError && (
                    <li>
                      <Typography>
                        {mutation?.error?.response?.data?.message?.email}
                      </Typography>
                    </li>
                    )}
                  </ul>
                </Alert>
                )
              }

          <div className={classes.buttonWrapper}>
            <Button variant="transparent" className={classes.button} onClick={handleCancel}>cancel</Button>
            <Button color="primary" className={classes.button} typebutton="submit">send</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

UserFormPage.propTypes = {
  dataContent: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default UserFormPage;
