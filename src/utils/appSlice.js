import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpenSidebar: false,
    suggestions: true,
    isVisible: true,
    isShowSettings: false, 
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
    toggleSettings: (state) => {
      state.isShowSettings = !state.isShowSettings;
    }
  },
});

export const { toggleSidebar, showSuggetions, toggleElements , toggleSettings} = appSlice.actions;
export default appSlice.reducer;
