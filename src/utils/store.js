import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import casheSlice from "./casheSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        cashe: casheSlice,
    }
});

export default store;
