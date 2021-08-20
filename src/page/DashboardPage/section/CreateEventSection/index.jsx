import { postNewEvent } from "@services";
import { CreateFormTemplate, Loading, ModalApp } from "@components";
import { Divider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useMutation } from "react-query";

import { useHistory } from "react-router";
import CreateEventStyle from "./style";

const CreateEventSection = () => {
  const classes = CreateEventStyle();

  const mutation = useMutation((props) =>
    postNewEvent(props, {
      "Content-Type": "multipart/form-data",
    })
  );

  const [successModal, setSuccessModal] = useState(true);
  // const [failedModal, setFailedModal] = useState(mutation.isError);

  const history = useHistory();

  const handleCloseModalSuccess = () => {
    setSuccessModal(false);
    history.push("/");
  };

  return (
    <>
      {mutation.isSuccess && (
        <ModalApp
          isActive={successModal}
          handleClose={handleCloseModalSuccess}
          title="Upload Berhasil"
        />
      )}

      <Loading isActive={mutation.isLoading} hasBackdrop />
      <div className={classes.root}>
        <Typography className={classes.title}>Information</Typography>
        <Divider />
        <div className={classes.space} />
        <CreateFormTemplate handleSubmitForm={(val) => mutation.mutate(val)} />
      </div>
    </>
  );
};

export default CreateEventSection;
