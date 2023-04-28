import { configureStore } from "@reduxjs/toolkit";
import { statesApi } from "./statesApi";

export const store = configureStore({
    reducer: {
        [statesApi.reducerPath]: statesApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(statesApi.middleware)
});