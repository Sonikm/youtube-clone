import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    chats: [],
  },

  reducers: {
    addComments: (state, action) => {
      state.chats.unshift(action.payload);
      if (state.chats.length > 20) {
        state.chats.pop();
      }
    },
  },
});

export const { addComments } = liveChatSlice.actions;
export default liveChatSlice.reducer;
