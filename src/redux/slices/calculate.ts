import { createSlice } from '@reduxjs/toolkit';

export interface ICalculateState {
    inputResult: string;
}

const initialState: ICalculateState = {
    inputResult: '0',
};

export const calculateSlice = createSlice({
    name: 'calculate', initialState,
    reducers: {
        setInputResult(state, action) {
            state.inputResult = action.payload;
        },
        setInitCalculate(state) {
            state.inputResult = '0';
        },
    },
},
);

export const { setInputResult, setInitCalculate } = calculateSlice.actions;
