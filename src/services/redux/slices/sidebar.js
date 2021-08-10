import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    selectedIndexMenu: 0,
  },
  reducers: {
    selectedIndex: (state, action) => {
      state.selectedIndexMenu = action.payload;
    },
  },
});

export const { selectedIndex } = sidebarSlice.actions;

export default sidebarSlice.reducer;
