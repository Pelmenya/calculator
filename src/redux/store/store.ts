import { configureStore } from '@reduxjs/toolkit';
import { modeSlice } from '../slices/mode';
import logger from 'redux-logger';



export const store = configureStore({
    reducer: {
        [modeSlice.name]: modeSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (gDM) => gDM().concat(logger),
});

export type TAppStore = typeof store;

