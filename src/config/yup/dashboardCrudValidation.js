import * as yup from 'yup';

const crudValidation = yup.object().shape({
  themeName: yup
    .string()
    .isRequired(),
  imagePoster: yup
    .mixed()
    .isRequired()
    .test('typeFile', 'File harus jpeg/jpg/png', (value) => ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type))
    .test('fileSize', 'File terlalu besar', (value) => {
      if (!value.length) return true; // attachment is optional
      return value.size <= 1024 ** 2;
    }),
  description: yup.mixed().required(),
  date: yup
    .date()
    .min(new Date()
      .setHours(0, 0, 0, 0), 'Tanggal tidak boleh kurang dari hari ini'),
  eventStart: yup
    .date()
    .min(new Date().setHours(0, 0, 0, 0), 'Tanggal tidak boleh kurang dari hari ini'),
  eventEnd: yup
    .date()
    .min(new Date().setHours(0, 0, 0, 0), 'Tanggal tidak boleh kurang dari hari ini'),
  speakerName: yup
    .string()
    .isRequired(),
  location: yup
    .string()
    .isRequired(),
  linkLocation: yup
    .string().url(),
  endRegistration: yup
    .date()
    .min(new Date().setHours(0, 0, 0, 0), 'Tanggal tidak boleh kurang dari hari ini'),
  isOnlyTelkom: yup
    .string()
    .isRequired(),
  ticketLimit: yup
    .number()
    .min(5, 'Minimal tiket 5 orang')
    .max(100, 'Maksimal tiket 100 orang').positive(),
  note: yup
    .mixed()
    .required(),
});

export default crudValidation;

// const dummyForm = {
//     themeName: '',
//     imagePoster: '',
//     description: MUIEditorState.createEmpty(editorConfig),
//     date: moment().format(),
//     eventStart: moment().format(),
//     eventEnd: moment().format(),
//     speakerName: '',
//     location: '',
//     linkLocation: '',
//     endRegistration: moment().format(),
//     isOnlyTelkom: null,
//     ticketLimit: '',
//     note: MUIEditorState.createEmpty(editorConfig),
//   };
