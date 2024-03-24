import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk('product/fetchGetProduct', async () => {
	const data = axios('http://localhost:3000/products').then((res) => res.data);
	return data;
});

const initialState = {
	arr: [],
	status: 'loading', // 'loading' | 'success' | 'error'
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProduct.pending, (state) => {
			state.status = 'loading';
			state.arr = [];
		});
		builder.addCase(fetchProduct.fulfilled, (state, action) => {
			state.status = 'success';
			state.arr = action.payload;
		});
		builder.addCase(fetchProduct.rejected, (state) => {
			state.status = 'error';
			state.arr = [];
		});
	},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
