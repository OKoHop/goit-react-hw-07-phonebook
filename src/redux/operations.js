import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://651829cd582f58d62d3575a7.mockapi.io';

export const fetchContacts = () => createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/contacts');
            console.log(data);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = () => createAsyncThunk(
    'contacts/addContact',
    async (text, thunkAPI) => {
        try {
            const { data } = axios.post('/contacts', { text });
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);

export const deleteContact = () => createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const { data } = axios.delete(`/contacts/${contactId}`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);