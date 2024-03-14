import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isOpenSidebar: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar;
    }
  },
});

export const {toggleSidebar} = appSlice.actions;
export default appSlice.reducer;
