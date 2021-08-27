/* eslint-disable no-alert */
import axios from "axios";
import CONFIG from "../config";

const fullURL = path => `${CONFIG.API_URL}/api/${path}`;

axios.interceptors.request.use(
	config => {
		if ("token" in localStorage) {
			const {token} = localStorage;
			config.headers.authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => Promise.reject(error)
);

axios.interceptors.response.use(
	response => response,
	error => {
		if (error.response?.status === 401) {
			if ("token" in localStorage) localStorage.removeItem("token");
			window.location = "/";
		}
		return Promise.reject(error);
	}
);

export const handleNetworkError = error => {
	if (error.message === "Network request failed") {
		alert(
			"Kesalahan Jaringan",
			"Silakan periksa koneksi Anda dan coba embalm.",
			"iconNoInet"
		);
	}
	throw error;
};

export const handleCommonError = error => {
	if (error && error.data.msg === "invalid token") {
		alert(
			"Session kamu telah habis",
			"Silakan login kembali dengan akun kamu yg telah terdaftar"
		);
		throw new Error({
			logout: true,
		});
	} else {
		throw error;
	}
};

const post =
	api =>
	(data, header, config, timemout = true) => {
		const tokens = localStorage.getItem("token");
		const tokenBearer = `Bearer ${tokens}`;

		return axios.post(
			fullURL(api),
			data,
			{
				headers: {
					...header,
					authorization: tokenBearer,
				},
				...config
			},
			timemout
		);
	};

const patch =
	api =>
	(data, config, timemout = true) => {
		const tokens = localStorage.getItem("token");
		const tokenBearer = `Bearer ${tokens}`;
		return axios.patch(
			fullURL(api),
			data,
			{
				headers: {
					authorization: tokenBearer,
				},
				...config
			},
			timemout
		);
	};

const postData =
	api =>
	(data, config, timemout = true) => {
		const tokenBearer = `Bearer ${localStorage.getItem("token")}`;
		return axios.post(
			fullURL(api),
			data,
			{
				headers: {
					authorization: tokenBearer,
				},
				...config
			},
			{handleNetworkError, handleCommonError},
			timemout
		);
	};

const get =
	api =>
	async (params, timemout = true) => {
		const tokens = localStorage.getItem("token");
		const tokenBearer = `Bearer ${tokens}`;
		const response = await axios(
			fullURL(api),
			{
				headers: {
					authorization: tokenBearer,
				},
				params,
			},
			{handleNetworkError, handleCommonError},
			timemout
		);
		return response.data;
	};

const getWithSlug =
	api =>
	async (slug, params, timemout = true) => {
		const tokens = localStorage.getItem("token");
		const tokenBearer = `Bearer ${tokens}`;
		const response = await axios(
			`${fullURL(api)}${slug}`,
			{
				headers: {
					authorization: tokenBearer,
				},
				params,
			},
			{handleNetworkError, handleCommonError},
			timemout
		);
		return response.data;
	};

const patchWithSlug =
	api =>
	(slug, data, header, config, timeout = true) => {
		const tokens = localStorage.getItem("token");
		const tokenBearer = `Bearer ${tokens}`;
		return axios.patch(
			`${fullURL(api)}${slug}/`,
			data,
			{
				headers: {
					...header,
					authorization: tokenBearer,
				},
				...config
			},
			timeout
		);
	};

const putWithSlug =
	api =>
	(slug, data, header, config, timeout = true) => {
		const tokens = localStorage.getItem("token");
		const tokenBearer = `Bearer ${tokens}`;
		return axios.put(
			`${fullURL(api)}${slug}/`,
			data,
			{
				headers: {
					...header,
					authorization: tokenBearer,
				},
				...config
			},
			timeout
		);
	};

const deleteWithSlug =
	api =>
	(slug, timeout = true) => {
		const tokens = localStorage.getItem("token");
		const tokenBearer = `Bearer ${tokens}`;
		return axios.delete(
			`${fullURL(api)}${slug}/`,
			{
				headers: {
					authorization: tokenBearer,
				},
			},
			timeout
		);
	};

export {
	post,
	patch,
	postData,
	get,
	getWithSlug,
	patchWithSlug,
	deleteWithSlug,
	putWithSlug,
};
