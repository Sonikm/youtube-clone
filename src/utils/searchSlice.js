import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    searchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});


export const {searchQuery} = searchSlice.actions;
export default searchSlice.reducer;