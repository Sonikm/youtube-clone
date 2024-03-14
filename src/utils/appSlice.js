import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpenSidebar: false,
    suggestions: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    showSuggetions: (state, action) => {
      state.suggestions = action.payload
    }
  },
});

export const {toggleSidebar, showSuggetions} = appSlice.actions;
export default appSlice.reducer;
