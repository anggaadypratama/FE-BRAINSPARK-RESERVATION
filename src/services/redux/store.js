import {combineReducers, configureStore} from "@reduxjs/toolkit";
import contentPageReducer from "./slices/contentPage";
import dashboardPageReducer from "./slices/dashboardPage";

const reducer = combineReducers({
	contentPage: contentPageReducer,
	dashboardPage: dashboardPageReducer,
});

const store = configureStore({
	reducer,
});

export default store;
