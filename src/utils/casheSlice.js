import { createSlice } from "@reduxjs/toolkit";

const casheSlice = createSlice({
    name: "casheResult",
    initialState: {

    },
    reducers: {
       casheResult: (state, action) => {
        state = Object.assign(state, action.payload);
       } 
    }
});

export const {casheResult} = casheSlice.actions;

export default casheSlice.reducer;