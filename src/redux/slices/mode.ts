import { createSlice } from '@reduxjs/toolkit';
export interface IModeState {
    mode: 'Runtime' | 'Constructor';
}

const initialState: IModeState = {
    mode: 'Runtime',
};

export const modeSlice = createSlice({
    name: 'mode', initialState,
    reducers: {
        setMode(state, action) {
            state.mode = action.payload;
        },
    },
},
);

export const { setMode } = modeSlice.actions;

