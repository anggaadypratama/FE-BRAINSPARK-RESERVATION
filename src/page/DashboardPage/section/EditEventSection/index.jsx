import { patchDetailEventById, getDetailEventByIdWithAuth } from '@services';
import { CreateFormTemplate, Loading } from '@components';
import { Divider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { ModalApp } from '@/components';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import EditEventStyle from './style';

// eslint-disable-next-line react/prop-types
const EditEventSection = ({ match }) => {
  const classes = EditEventStyle();
  const [successModal, setSuccessModal] = useState(true);
  const { id } = match?.params;

  const {
    data,
    isLoading: detailLoading,
    error,
    refetch,
  } = useQuery(['detail', id], async () => {
    const dataFilter = await getDetailEventByIdWithAuth(id);
    return dataFilter?.data?.id === id && dataFilter;
  });

  const history = useHistory();

  const handleCloseModalSuccess = () => {
    setSuccessModal(false);
    history.push('/');
  };

  const mutation = useMutation((props) => patchDetailEventById(id, props, {
    'Content-Type': 'multipart/form-data',
  }));

  return (
    <>
      {
      mutation.isSuccess && (
      <ModalApp
        isActive={successModal}
        handleClose={handleCloseModalSuccess}
        title="Update Berhasil"
      />
      )
    }
      {
      !detailLoading && error?.response?.status === 404 && (
      <ModalApp
        isActive={successModal}
        handleClose={handleCloseModalSuccess}
        title="Event tidak ditemukan"
      />
      )
    }

      <Loading isActive={mutation.isLoading} hasBackdrop />
      <Loading isActive={detailLoading || data?.data?.length} hasBackdrop />
      {
        !detailLoading && data?.status === 200 && (
        <div className={classes.root}>
          <Typography className={classes.title}>Information</Typography>
          <Divider />
          <div className={classes.space} />
          <CreateFormTemplate
            defaultData={data?.data}
            handleSubmitForm={(val) => mutation.mutate(val)}
            refetch={refetch}
          />
        </div>
        )
      }

    </>
  );
};

EditEventSection.propTypes = {
  match: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.object), PropTypes.node]),
};

EditEventSection.defaultProps = {
  match: {},
};

export default EditEventSection;
