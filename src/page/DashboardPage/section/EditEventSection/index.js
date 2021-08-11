import { getDetailEventById, patchDetailEventById } from '@services';
import { CreateFormTemplate, Loading } from '@components';
import { Divider, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { ModalApp } from '@/components';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectedIndex } from '@services/redux/slices/sidebar';
import PropTypes from 'prop-types';

import EditEventStyle from './style';

// eslint-disable-next-line react/prop-types
const EditEventSection = ({ match }) => {
  const classes = EditEventStyle();
  const dispatch = useDispatch();

  const {
    data,
    isLoading: detailLoading,
    refetch,
  } = useQuery('detail', () => getDetailEventById(match?.params?.id));

  const mutation = useMutation((props) => patchDetailEventById(match?.params?.id, props, {
    'Content-Type': 'multipart/form-data',
  }));

  // const id = match?.params?.id;

  const [successModal, setSuccessModal] = useState(true);
  // const [failedModal, setFailedModal] = useState(mutation.isError);

  useEffect(() => {
    dispatch(selectedIndex(0));
  }, []);

  const history = useHistory();

  const handleCloseModalSuccess = () => {
    setSuccessModal(false);
    history.push('/');
    dispatch(selectedIndex(0));
  };

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
