import { createSlice } from "@reduxjs/toolkit";
import { MAX_COMMENTS } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [

    ],
  },
  reducers: {
    addMessages: (state, action) => {
      state.message.unshift(action.payload);
      state.message.splice(MAX_COMMENTS, 1);
      
    },
  },
});

export const {addMessages} = chatSlice.actions;
export default chatSlice.reducer;
