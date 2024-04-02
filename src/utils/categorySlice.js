import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    categoryVideos: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { categoryVideos } = categorySlice.actions;
export default categorySlice.reducer;
