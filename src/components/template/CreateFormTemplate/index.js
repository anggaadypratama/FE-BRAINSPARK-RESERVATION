import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { InputFormAdmin, Button } from '@components';

// import { useFormik } from 'formik';
import { MUIEditorState } from 'react-mui-draft-wysiwyg';
import moment from 'moment';
import CreateFormStyle from './style';
import { participantCategory, ticketLimit } from './data';

const CreateFormTemplate = () => {
  const classes = CreateFormStyle();

  const editorConfig = {
    editor: {
      wrapperElement: 'div',
      className: classes.textEditor,
    },
    toolbar: {
      className: classes.toolbarEditor,
    },
  };

  const [form, setForm] = useState({
    theme: '',
    description: MUIEditorState.createEmpty(editorConfig),
    date: moment().format(),
    eventStart: moment().format(),
    eventEnd: moment().format(),
    speakerName: '',
    participantCategory: '',
    registrationDeadline: moment().format(),
    ticket: '',
    note: MUIEditorState.createEmpty(editorConfig),
  });

  const handleInputChange = (val, type) => (e) => {
    if (type === 'text') {
      setForm({ ...form, [val]: e.target.value });
    } else {
      setForm({ ...form, [val]: e });
    }
  };

  return (
    <div className={classes.root}>
      <form>
        <div className={classes.formWrapper}>
          <Typography variant="h6">Event Information</Typography>
          <InputFormAdmin
            title="1. Input event theme"
            fullWidth
            multiline
            id="theme"
            name="theme"
            value={form.theme}
            onChange={handleInputChange('theme', 'text')}
          />
          <InputFormAdmin
            title="3. Input event description"
            inputType="editor"
            value={form.description}
            onChange={handleInputChange('description')}
          />
          <Typography variant="h6">Event Information Details</Typography>
          <InputFormAdmin
            title="4. Input event date"
            variant="inline"
            inputType="date"
            id="date"
            name="date"
            TimeOrDateInput
            format="DD/MM/yyyy"
            inputVariant="outlined"
            value={form.date}
            onChange={handleInputChange('date')}
          />
          <div className={classes.time}>
            <Typography>5. Input event time</Typography>
            <div className={classes.timeWrapper}>
              <InputFormAdmin
                className={classes.timeInput}
                variant="inline"
                title="Event start"
                inputType="time"
                TimeOrDateInput
                inputVariant="outlined"
              />
              <InputFormAdmin
                className={classes.timeInput}
                variant="inline"
                title="Event end"
                inputType="time"
                TimeOrDateInput
                inputVariant="outlined"
              />
            </div>
          </div>
          <InputFormAdmin
            title="7. Input speaker name"
            fullWidth
          />
          <InputFormAdmin
            label="8. Select participant category"
            data={participantCategory}
            inputType="radio"
            InputLabelProps={{
              shrink: true,
            }}
            id="standard-full-width"
          />
          <InputFormAdmin
            title="9. Registration Deadline"
            variant="inline"
            inputType="date"
            TimeOrDateInput
            format="DD/MM/yyyy"
            inputVariant="outlined"
          />
          <InputFormAdmin
            label="10. Ticket Registration Limit"
            data={ticketLimit}
            row
            inputType="radio"
            InputLabelProps={{
              shrink: true,
            }}
            id="standard-full-width"
          />
          <InputFormAdmin
            title="11. Note To Participant"
            inputType="editor"
            value={form.note}
            onChange={handleInputChange('note')}
          />
        </div>
        <div className={classes.buttonWrapper}>
          <Button
            color="primary"
            type="submit"
          >
            Upload

          </Button>
        </div>

      </form>
    </div>
  );
};

export default CreateFormTemplate;
