import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpenSidebar: false,
    suggestions: true,
    isVisible: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    showSuggetions: (state, action) => {
      state.suggestions = action.payload;
    },
    toggleElements: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { toggleSidebar, showSuggetions, toggleElements } = appSlice.actions;
export default appSlice.reducer;
