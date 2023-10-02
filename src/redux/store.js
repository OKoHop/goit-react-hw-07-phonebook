import { configureStore } from "@reduxjs/toolkit";
import { sliceContacts, sliceFilter } from "./slice";

export const store = configureStore({
    reducer: {
        contacts: sliceContacts.reducer,
        filter: sliceFilter.reducer,
    },
})
