import { configureStore } from "@reduxjs/toolkit";
import { contactReducers, sliceFilter } from "./slice";

export const store = configureStore({
    reducer: {
        contacts: contactReducers,
        filter: sliceFilter.reducer,
    },
})
