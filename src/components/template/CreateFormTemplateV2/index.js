import { Typography } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { InputFormAdmin, Button } from '@components';

import { MUIEditorState, toHTML } from 'react-mui-draft-wysiwyg';
import moment from 'moment';
import PropTypes from 'prop-types';
import CreateFormStyle from './style';
import { participantCategory, locationType } from './data';

const CreateFormTemplate = ({ handleSubmitForm }) => {
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

  const [location, setLocation] = useState(null);

  const dummyForm = {
    themeName: '',
    imagePoster: '',
    description: MUIEditorState.createEmpty(editorConfig),
    date: moment().format(),
    eventStart: moment().format(),
    eventEnd: moment().format(),
    speakerName: '',
    location: '',
    linkLocation: '',
    endRegistration: moment().format(),
    isOnlyTelkom: null,
    ticketLimit: '',
    note: MUIEditorState.createEmpty(editorConfig),
  };

  const [form, setForm] = useState(dummyForm);

  const handleInputChange = useCallback((val, type) => (e) => {
    if (['checkbox', 'radio', 'text'].includes(type)) {
      if (val === 'isOnlyTelkom') {
        setForm({
          ...form,
          isOnlyTelkom: {
            isOnlyTelkom: e.target.value === 'telyu',
          },
        });
      } else {
        setForm({ ...form, [val]: e.target.value });
      }
    } else if (type === 'file') {
      setForm({ ...form, [val]: e.target.files[0] });
    } else {
      setForm({ ...form, [val]: e });
    }
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      const data = ['description', 'note'].includes(key)
        ? toHTML(form[key].getCurrentContent()) : key === 'isOnlyTelkom'
          ? JSON.stringify(form[key]) : form[key];
      return formData.append(key, data);
    });

    handleSubmitForm(formData);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div className={classes.formWrapper}>
          <Typography variant="h6">Event Information</Typography>
          <InputFormAdmin
            title="1. Input event theme"
            fullWidth
            multiline
            id="theme"
            name="themeName"
            value={form.themeName}
            onChange={handleInputChange('themeName', 'text')}
          />
          <InputFormAdmin
            title="2. Input event description"
            type="file"
            color="primary"
            variant="contained"
            size="small"
            value={form.imagePoster}
            onChange={handleInputChange('imagePoster', 'file')}
            label="upload"
          />

          <InputFormAdmin
            title="3. Input event description"
            type="editor"
            value={form.description}
            onChange={handleInputChange('description')}
          />
          <Typography variant="h6">Event Information Details</Typography>
          <InputFormAdmin
            title="4. Input event date"
            variant="inline"
            type="date"
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
                type="time"
                TimeOrDateInput
                inputVariant="outlined"
                value={form.eventStart}
                onChange={handleInputChange('eventStart')}
              />
              <InputFormAdmin
                className={classes.timeInput}
                variant="inline"
                title="Event end"
                type="time"
                TimeOrDateInput
                inputVariant="outlined"
                value={form.eventEnd}
                onChange={handleInputChange('eventEnd')}
              />
            </div>
          </div>
          <InputFormAdmin
            label="6. Event location"
            data={locationType}
            type="radio"
            InputLabelProps={{
              shrink: true,
            }}
            id="standard-full-width"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className={classes.locationWrapper}>
            {
              (location === 'outsite' || location === 'online') && (
              <InputFormAdmin
                title="Place"
                placeholder="Gedung Arwana..."
                fullWidth
                value={form.location}
                onChange={handleInputChange('location', 'text')}
              />
              )
            }
            {
              location === 'online' && (
              <InputFormAdmin
                title="Link"
                placeholder="www.meet.google.com..."
                fullWidth
                value={form.linkLocation}
                onChange={handleInputChange('linkLocation', 'text')}
              />
              )
            }
          </div>
          <InputFormAdmin
            title="7. Input speaker name"
            fullWidth
            value={form.speakerName}
            onChange={handleInputChange('speakerName', 'text')}
          />
          <InputFormAdmin
            label="8. Select participant category"
            data={participantCategory}
            type="radio"
            InputLabelProps={{
              shrink: true,
            }}
            id="standard-full-width"
            value={form.isOnlyTelkom}
            onChange={handleInputChange('isOnlyTelkom', 'radio')}
          />
          <InputFormAdmin
            title="9. Registration Deadline"
            variant="inline"
            type="date"
            TimeOrDateInput
            format="DD/MM/yyyy"
            inputVariant="outlined"
            value={form.endRegistration}
            onChange={handleInputChange('endRegistration')}
          />
          <InputFormAdmin
            title="10. Ticket registration limit"
            fullWidth
            inputType="number"
            value={form.ticketLimit}
            onChange={handleInputChange('ticketLimit', 'text')}
          />
          <InputFormAdmin
            title="11. Note To Participant"
            type="editor"
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

CreateFormTemplate.propTypes = {
  // defaultData: PropTypes.objectOf(PropTypes.object),
  handleSubmitForm: PropTypes.func.isRequired,
};

CreateFormTemplate.defaultProps = {
  // defaultData: {},
};

export default CreateFormTemplate;