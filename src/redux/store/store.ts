import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { modeSlice } from '../slices/mode';
import { detailsSlice } from '../slices/details';



export const store = configureStore({
    reducer: {
        [modeSlice.name]: modeSlice.reducer,
        [detailsSlice.name]: modeSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (gDM) => gDM().concat(logger),
});

export type TAppStore = typeof store;

