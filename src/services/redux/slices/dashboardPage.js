import {createSlice} from "@reduxjs/toolkit";

export const dashboardPageSlice = createSlice({
	name: "dashboardPage",
	initialState: {
		loadingProgress: 0,
	},
	reducers: {
		setLoadingProgress: (state, action) => {
			state.loadingProgress = action.payload;
		},
	},
});

export const {setLoadingProgress} = dashboardPageSlice.actions;

export default dashboardPageSlice.reducer;
