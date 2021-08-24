import {combineReducers, configureStore} from "@reduxjs/toolkit";
import contentPageReducer from "./slices/contentPage";

const reducer = combineReducers({
	contentPage: contentPageReducer,
});

const store = configureStore({
	reducer,
});

export default store;
