import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userApi = 'http://localhost:3000/users/1';

export const fetchAboutUser = createAsyncThunk('userinfo/fetchGetAboutUser', async () => {
	const data = axios(userApi).then((res) => res.data);
	return data;
});

const initialState = {
	aboutUser: {},
};

export const SaveSlice = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAboutUser.pending, (state) => {
			state.aboutUser = {};
		});
		builder.addCase(fetchAboutUser.fulfilled, (state, action) => {
			state.aboutUser = action.payload;
		});
		builder.addCase(fetchAboutUser.rejected, (state) => {
			state.aboutUser = {};
		});
	},
});

export const {} = SaveSlice.actions;

export default SaveSlice.reducer;
