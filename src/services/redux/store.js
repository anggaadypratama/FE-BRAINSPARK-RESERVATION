import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({

});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }),
});

export default store;
