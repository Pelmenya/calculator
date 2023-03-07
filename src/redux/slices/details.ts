import { createSlice } from '@reduxjs/toolkit';
import { TDetails } from '../types/t-details';

export interface IDetailsState {
    details: TDetails[];
}

const initialState: IDetailsState = {
    details: ['display', 'operations', 'symbols', 'equally'],
};

export const detailsSlice = createSlice({
    name: 'details', initialState,
    reducers: {
        setDetails(state, action) {
            state.details = action.payload;
        },
    },
},
);

export const { setDetails } = detailsSlice.actions;