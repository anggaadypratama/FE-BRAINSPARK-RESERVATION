import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebar';
import contentPageReducer from './slices/contentPage';

const reducer = combineReducers({
  sidebar: sidebarReducer,
  contentPage: contentPageReducer,
});

const store = configureStore({
  reducer,
});

export default store;
