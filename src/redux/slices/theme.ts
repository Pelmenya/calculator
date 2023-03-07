import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
    theme: 'dark' | 'light';
}

const initialState: ThemeState = {
    theme: 'light',
};

export const themeSlice = createSlice({
    name: 'theme', initialState,
    reducers: {

        setTheme(state, action) {
            state.theme = action.payload;
        },

    },
},
);

export const { setTheme } = themeSlice.actions;

