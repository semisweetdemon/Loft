import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	language: JSON.parse(localStorage.getItem('lang')) || 'en',
};

export const langSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setLanguage(state, action) {
			state.language = action.payload;
		},
	},
});

export const { setLanguage } = langSlice.actions;

export default langSlice.reducer;
