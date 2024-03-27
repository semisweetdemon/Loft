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
	reducers: {
		setAddRemoveFavorite(state, action) {
			let findParent = state.arr.find((el) => el.path === action.payload.parent);
			let newArr = findParent.categoryProducts.map((elem) => {
				if (elem.id === action.payload.id) {
					return elem.favorite === true ? { ...elem, favorite: false } : { ...elem, favorite: true };
				}
				return elem;
			});
			state.arr = state.arr.map((el) => (el.path === action.payload.parent ? { ...findParent, categoryProducts: newArr } : el));
		},
		setAddBusket(state, action) {
			let findParent = state.arr.find((el) => el.path === action.payload.parent);
			let newArr = findParent.categoryProducts.map((elem) => {
				if (elem.id === action.payload.id) {
					return elem.busket === true ? { ...elem, count: action.payload.count + 1 } : { ...elem, busket: true };
				}
				return elem;
			});
			state.arr = state.arr.map((el) => (el.path === action.payload.parent ? { ...findParent, categoryProducts: newArr } : el));
		},
		setRemoveBusket(state, action) {
			let findParent = state.arr.find((el) => el.path === action.payload.parent);
			let newArr = findParent.categoryProducts.map((elem) => {
				if (elem.id === action.payload.id) {
					return { ...elem, busket: false, count: 1 };
				}
				return elem;
			});
			state.arr = state.arr.map((el) => (el.path === action.payload.parent ? { ...findParent, categoryProducts: newArr } : el));
		},
		setCountPlus(state, action) {
			let findParent = state.arr.find((el) => el.path === action.payload.parent);
			let newArr = findParent.categoryProducts.map((elem) => {
				if (elem.id === action.payload.id) {
					return { ...elem, count: action.payload.count + 1 };
				}
				return elem;
			});
			state.arr = state.arr.map((el) => (el.path === action.payload.parent ? { ...findParent, categoryProducts: newArr } : el));
		},
		setCountMinus(state, action) {
			let findParent = state.arr.find((el) => el.path === action.payload.parent);
			let newArr = findParent.categoryProducts.map((elem) => {
				if (elem.id === action.payload.id) {
					return action.payload.count > 1 ? { ...elem, count: action.payload.count - 1 } : { ...elem };
				}
				return elem;
			});
			state.arr = state.arr.map((el) => (el.path === action.payload.parent ? { ...findParent, categoryProducts: newArr } : el));
		},
	},
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

export const { setAddRemoveFavorite, setAddBusket, setRemoveBusket, setCountPlus, setCountMinus } = productSlice.actions;

export default productSlice.reducer;
