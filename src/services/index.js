import {
	post,
	// patch,
	postData,
	get,
	getWithSlug,
	patchWithSlug,
	deleteWithSlug,
	putWithSlug,
} from "./method";

export const login = post("users/login/");
export const checkIsAuthenticated = get("");

export const postNewEvent = postData("event/");
export const getAllEventWithAuth = get("event/dashboard/");
export const getDetailEventByIdWithAuth = getWithSlug("event/dashboard/");
export const getDetailEventById = getWithSlug("event/");
export const getAllEvent = get("event/");
export const patchDetailEventById = patchWithSlug("event/");
export const deleteDetailEventById = deleteWithSlug("event/");

export const putEventParticipant = putWithSlug("event/");
export const putEventParticipantAbsent = putWithSlug("event/");
export const getEventParticipantSearch = getWithSlug("event/");

const API = {
	getAllEvent,
	getDetailEventById,
	patchDetailEventById,
	deleteDetailEventById,
	getDetailEventByIdWithAuth,
	getAllEventWithAuth,
	putEventParticipant,
	putEventParticipantAbsent,
	getEventParticipantSearch,
};

export default API;
