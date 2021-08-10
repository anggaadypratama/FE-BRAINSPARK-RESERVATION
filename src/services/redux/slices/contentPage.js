import { createSlice } from '@reduxjs/toolkit';

export const contentPageSlice = createSlice({
  name: 'contentPage',
  initialState: {
    contentPageIndex: false,
    refetch: () => {},
  },
  reducers: {
    selectedContentIndex: (state, action) => {
      state.contentPageIndex = ![null, undefined].includes(action.payload)
        ? action.payload : !state.contentPageIndex;
    },
    setRefetch: (state, action) => {
      state.refetch = action.payload;
    },

  },
});

export const { selectedContentIndex, setRefetch } = contentPageSlice.actions;

export default contentPageSlice.reducer;
