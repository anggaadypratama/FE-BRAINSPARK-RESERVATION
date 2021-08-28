import {createSlice} from "@reduxjs/toolkit";

export const contentPageSlice = createSlice({
	name: "contentPage",
	initialState: {
		contentPageIndex: false,
	},
	reducers: {
		selectedContentIndex: (state, action) => {
			state.contentPageIndex = ![null, undefined].includes(action.payload)
				? action.payload
				: !state.contentPageIndex;
		},
	},
});

export const {selectedContentIndex} = contentPageSlice.actions;

export default contentPageSlice.reducer;
