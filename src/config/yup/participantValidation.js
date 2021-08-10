import * as yup from 'yup';

const participantValidation = yup.object().shape({
  name: yup
    .string()
    .required('Username tidak boleh kosong')
    .label('username'),
  email: yup
    .string()
    .email('Harus berupa email valid')
    .required('Email tidak boleh kosong'),
  isTelkomOnly: yup
    .boolean(),
  nim: yup
    .number()
    .when('isTelkomOnly', {
      is: true,
      then: yup
        .number()
        .positive('Nim tidak boleh bilangan negatif')
        .integer()
        .required('Nim tidak boleh kosong'),
    }),
  fakultas: yup
    .string()
    .when('isTelkomOnly', {
      is: true,
      then: yup
        .string()
        .required('Fakultas wajib dipilih'),
    }),
  status: yup
    .string()
    .when('isTelkomOnly', {
      is: false,
      then: yup
        .string()
        .required('Status tidak boleh kosong'),
    }),
  whatsapp: yup.string(),
  line: yup.string(),
});

export default participantValidation;
