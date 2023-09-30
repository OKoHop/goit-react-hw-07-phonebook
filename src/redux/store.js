import { configureStore } from "@reduxjs/toolkit";
import { sliceContacts, sliceFilter } from "./slice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(persistConfig, sliceContacts.reducer)


export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: sliceFilter.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);