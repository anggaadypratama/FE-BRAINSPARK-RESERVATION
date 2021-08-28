import * as yup from "yup";
import {toHTML} from "react-mui-draft-wysiwyg";
import moment from "moment";

const date = new Date(Date.now() - 86400000);

const crudValidation = yup.object().shape({
	themeName: yup.string().required("Nama tema wajib diisi"),
	date: yup
		.date()
		.min(date)
		.default(() => moment()),
	eventStart: yup.date(),
	eventEnd: yup
		.date()
		.min(
			yup.ref("eventStart"),
			"Event selesai tidak boleh kurang dari event dimulai"
		),
	speakerName: yup.string().required("Pembawa materi wajib diisi"),
	isLinkLocation: yup.boolean().required(),
	location: yup.string().required("Lokasi tidak boleh kosong"),
	linkLocation: yup
		.string()
		.when("isLinkLocation", {
			is: true,
			then: yup.string().url().required("Link tidak boleh kosong"),
		})
		.url(),
	isOnlyTelkom: yup.mixed().required("kategori partisipan wajib dipilih"),
	endRegistration: yup
		.date()
		.min(new Date(), "Registrasi tidak boleh kurang dari tanggal hari ini")
		.max(
			yup.ref("eventStart"),
			"Registrasi tidak boleh lebih dari event dimulai"
		),
	ticketLimit: yup
		.number()
		.positive()
		.min(5, "Tiket minimal 5")
		.max(100, "Tiket maksimal 100"),
	note: yup.mixed().test("note", "Note tidak boleh kosong", value => {
		if (value.length) {
			let data = toHTML(value.getCurrentContent());
			data = data.replace(/<\/?[^>]+(>|$)/g, "");
			return data.length;
		}
		return value;
	}),
	description: yup
		.mixed()
		.test("description", "Deskripsi tidak boleh kosong", value => {
			if (value.length) {
				let data = toHTML(value.getCurrentContent());
				data = data.replace(/<\/?[^>]+(>|$)/g, "");
				return data.length;
			}

			return value;
		})
		.required(),
	imagePoster: yup
		.mixed()
		.required("File tidak boleh kosong")
		.test(
			"fileSize",
			"Gambar Tidak boleh Kosong",
			value => ![null, undefined].includes(value) && value.length !== 0
		)
		.test(
			"fileSize",
			"Gambar maksimal 1MB",
			value =>
				![null, undefined].includes(value) &&
				value.length !== 0 &&
				value.size <= 1024 ** 2
		)
		.test(
			"typeFile",
			"Gambar harus jpeg/jpg/png",
			value =>
				![null, undefined].includes(value) &&
				value.length !== 0 &&
				["image/jpeg", "image/jpg", "image/png"].includes(value.type)
		),
	isAbsentActive: yup.boolean(),
});

export default crudValidation;
