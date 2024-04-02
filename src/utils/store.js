import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import casheSlice from "./casheSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        cashe: casheSlice,
        category: categorySlice,
    }
});

export default store;
