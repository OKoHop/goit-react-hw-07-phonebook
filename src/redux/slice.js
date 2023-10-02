import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const sliceContacts = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => 
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = action.payload;
                state.error = null;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.contacts = [...state.contacts, action.payload];
                state.error = null;
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
            })
            .addCase(deleteContact.rejected, handleRejected)
})

export const sliceFilter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterChange: (_, action) => {
            return `${action.payload}`
        }
    }
})

export const contactReducers = sliceContacts.reducer;
export const { filterChange } = sliceFilter.actions;
