import { createSlice } from '@reduxjs/toolkit';
import { TOperations } from '../../utils/types/t-operations';
import { TSymbols } from '../../utils/types/t-symbols';

export interface ICalculateState {
    result: string;
    operation?: TOperations;
    symbol?: TSymbols;
}

const initialState: ICalculateState = {
    result: '0',
};

export const calculateSlice = createSlice({
    name: 'calculate', initialState,
    reducers: {
        setSymbol(state, action) {
            state.symbol = action.payload;
        },
        setOperation(state, action) {
            state.operation = action.payload;
        },
        setResult(state, action) {
            state.result = action.payload;
        },
        setInitCalculate(state) {
            state.result = '0';
            state.operation = undefined;
            state.symbol = undefined;
        },
    },
},
);

export const { setOperation, setSymbol, setResult, setInitCalculate } = calculateSlice.actions;
