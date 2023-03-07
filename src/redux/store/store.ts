import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from '../slices/theme';
import logger from 'redux-logger';



export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (gDM) => gDM().concat(logger),
});

export type TAppStore = typeof store;

