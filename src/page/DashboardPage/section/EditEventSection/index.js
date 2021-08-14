import { getDetailEventById, patchDetailEventById } from '@services';
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

  const {
    data,
    isLoading: detailLoading,
    refetch,
  } = useQuery('detail', () => getDetailEventById(match?.params?.id));

  const history = useHistory();

  const handleCloseModalSuccess = () => {
    setSuccessModal(false);
    history.push('/');
  };

  const mutation = useMutation((props) => patchDetailEventById(match?.params?.id, props, {
    'Content-Type': 'multipart/form-data',
  }));

  return (
    <>
      {
      mutation.isSuccess && (
      <ModalApp
        isActive={successModal}
        handleClose={handleCloseModalSuccess}
        title="Upload Berhasil"
      />
      )
    }

      <Loading isActive={mutation.isLoading} hasBackdrop />
      <Loading isActive={detailLoading || data?.data?.length} hasBackdrop />
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
    </>
  );
};

EditEventSection.propTypes = {
  match: PropTypes.node,
};

EditEventSection.defaultProps = {
  match: {},
};

export default EditEventSection;
