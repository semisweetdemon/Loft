import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	comment: [],
};

export const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {
		addComment(state, action) {},
	},
});

export const {} = commentSlice.actions;

export default commentSlice.reducer;
