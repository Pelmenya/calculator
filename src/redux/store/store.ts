import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { modeSlice } from '../slices/mode';
import { detailsSlice } from '../slices/details';
import { calculateSlice } from '../slices/calculate';


const isDev = process.env.NODE_ENV !== 'production';
const middlewares = isDev ? [logger] : [];

export const store = configureStore({
    reducer: {
        [modeSlice.name]: modeSlice.reducer,
        [detailsSlice.name]: detailsSlice.reducer,
        [calculateSlice.name]: calculateSlice.reducer,
    },
    devTools: isDev,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

export type TAppStore = typeof store;

