import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputFormAdmin, Button } from '@components';
import Zoom from 'react-reveal/Zoom';
import FormRespondersStyle from './style';

const FormResponders = ({
  // id,
  Title,
  handleNext,
  result,
  value,
}) => {
  const classes = FormRespondersStyle();

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length <= 200) {
      setMessage(e.target.value);
    }
  };

  return (
    <Zoom cascade collapse when={result !== undefined && value.length > 1}>
      <div className={classes.root}>
        <InputFormAdmin
          error={message.length === 200}
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
  // id: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number,
  // ]),
  result: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.object),
    PropTypes.number,
    PropTypes.string]),
  value: PropTypes.string,
  Title: PropTypes.node,
  handleNext: PropTypes.func,
};

FormResponders.defaultProps = {
  // id: undefined,
  Title: '',
  result: undefined,
  value: '',
  handleNext: () => {},
};

export default FormResponders;
