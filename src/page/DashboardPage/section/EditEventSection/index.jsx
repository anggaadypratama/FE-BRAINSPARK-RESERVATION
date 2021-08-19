import { patchDetailEventById, getDetailEventByIdWithAuth } from "@services";
import { CreateFormTemplate, Loading } from "@components";
import { Divider, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ModalApp } from "@/components";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

import EditEventStyle from "./style";

const EditEventSection = ({ match }) => {
  const classes = EditEventStyle();
  const [successModal, setSuccessModal] = useState(true);
  const [image, setImage] = useState(null);
  const { id } = match?.params;

  const queryClient = useQueryClient();

  const {
    data,
    isLoading: detailLoading,
    error,
    refetch,
  } = useQuery(["detail", id], async () => {
    const dataFilter = await getDetailEventByIdWithAuth(id);
    return dataFilter?.data?.id === id && dataFilter;
  });

  const history = useHistory();

  const handleCloseModalSuccess = () => {
    setSuccessModal(false);
    history.push("/");
  };

  const poster = `${process.env.REACT_APP_BASE_URL}/${data?.data?.imagePoster}`;
  const allData = data?.data;

  useEffect(async () => {
    try {
      const imageUrl = await fetch(poster);
      const blob = await imageUrl.blob();
      const splitUrl = poster?.split("/");
      const nameFile = splitUrl[splitUrl?.length - 1]?.split("_")[1];
      const type = nameFile?.split(".");
      const file = await new File([blob], nameFile, {
        type: `image/${type[type?.length - 1]}`,
      });
      setImage(file);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, [poster, setImage]);

  const mutation = useMutation(
    (props) =>
      patchDetailEventById(id, props, {
        "Content-Type": "multipart/form-data",
      }),
    {
      onSuccess: () => queryClient.invalidateQueries("event"),
    }
  );

  const dataResult = { ...allData, imagePoster: image };

  return (
    <>
      {mutation.isSuccess && (
        <ModalApp
          isActive={successModal}
          handleClose={handleCloseModalSuccess}
          title="Update Berhasil"
        />
      )}
      {!detailLoading && error?.response?.status === 404 && (
        <ModalApp
          isActive={successModal}
          handleClose={handleCloseModalSuccess}
          title="Event tidak ditemukan"
        />
      )}

      <Loading isActive={mutation.isLoading} hasBackdrop />
      <Loading isActive={detailLoading || data?.data?.length} hasBackdrop />
      {!detailLoading && data?.status === 200 && image !== null && (
        <div className={classes.root}>
          <Typography className={classes.title}>Information</Typography>
          <Divider />
          <div className={classes.space} />
          <CreateFormTemplate
            defaultData={dataResult}
            handleSubmitForm={(val) => mutation.mutate(val)}
            refetch={refetch}
          />
        </div>
      )}
    </>
  );
};

EditEventSection.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.objectOf(PropTypes.object),
        PropTypes.string,
      ]),
    }),
  }).isRequired,
};

export default EditEventSection;
