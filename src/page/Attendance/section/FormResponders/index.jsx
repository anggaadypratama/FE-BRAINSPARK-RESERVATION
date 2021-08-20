import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { InputFormAdmin, Button } from "@components";
import Zoom from "react-reveal/Zoom";
import FormRespondersStyle from "./style";

const FormResponders = ({
  Title,
  handleNext,
  result,
  value,
  messageResponse,
}) => {
  const classes = FormRespondersStyle();

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length <= 200) {
      setMessage(e.target.value);
    }
  };

  useEffect(() => {
    messageResponse(message);
  }, [message]);

  return (
    <Zoom cascade collapse when={result?.status === 200 && value.length > 1}>
      <div className={classes.root}>
        <InputFormAdmin
          error={message.length === 200}
          label=""
          fullWidth
          multiline
          helperText={message.length > 0 && `${message.length}/200`}
          value={message}
          rows={3}
          onChange={handleChange}
          title={Title}
        />
        <div className={classes.buttonWrapper}>
          <Button
            className={classes.buttonSpacing}
            onClick={handleNext}
            color="secondary-gradient"
            disabled={message.length < 10}
          >
            Send Feedback
          </Button>
        </div>
      </div>
    </Zoom>
  );
};

FormResponders.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.object),
    PropTypes.number,
    PropTypes.string,
  ]),
  value: PropTypes.string,
  Title: PropTypes.node,
  handleNext: PropTypes.func,
  messageResponse: PropTypes.func,
};

FormResponders.defaultProps = {
  // id: undefined,
  Title: "",
  result: undefined,
  value: "",
  handleNext: () => {},
  messageResponse: () => {},
};

export default FormResponders;
