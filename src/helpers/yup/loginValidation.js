import * as yup from "yup";

const loginValidation = yup.object().shape({
	username: yup
		.string()
		.required("Username tidak boleh kosong")
		.label("username"),
	password: yup
		.string()
		.required("Password tidak boleh kosong")
		.label("password"),
});

export default loginValidation;
