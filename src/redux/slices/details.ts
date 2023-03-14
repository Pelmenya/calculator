import { createSlice } from '@reduxjs/toolkit';
import { TDetails } from '../types/t-details';

export interface IDetailsState {
    details: TDetails[];
    constructor: TDetails[]
}

const initialState: IDetailsState = {
    details: ['display', 'operations', 'symbols', 'equally'],
    constructor: [],
};

export const detailsSlice = createSlice({
    name: 'details', initialState,
    reducers: {
        setDetails(state, action) {
            state.details = action.payload;
        },
        setDetailsConstructor(state, action) {
            state.constructor = action.payload;
        },
    },
},
);

export const { setDetails, setDetailsConstructor } = detailsSlice.actions;