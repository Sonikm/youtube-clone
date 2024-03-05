import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isShowSuggestions: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    autoSearchSuggetions: (state, action) =>{
      state.isShowSuggestions = action.payload;
    }
  },
});

export const { toggleMenu, autoSearchSuggetions } = appSlice.actions;
export default appSlice.reducer;
