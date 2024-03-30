import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userApi } from './SaveSlice';

export const fetchProduct = createAsyncThunk('product/fetchGetProduct', async () => {
	const data = axios('http://localhost:3000/products').then((res) => res.data);
	return data;
});

export const fetchOldInfo = createAsyncThunk('produc/getOldInfo', async () => {
	let arr = await axios('http://localhost:3000/products').then((res) => res.data);
	let aboutUser = await axios(userApi).then((res) => res.data);
	let mass = [];
	for (let i of arr) {
		let m = i.categoryProducts.map((el) => {
			for (let n of aboutUser.busketAndFavorite) {
				if (n.id === el.id) {
					return { ...el, busket: n.busket, count: n.count, favorite: n.favorite };
				}
			}
			return el;
		});
		mass.push({ ...i, categoryProducts: m });
	}
	return mass;
});

const initialState = {
	arr: [],
	status: 'loading',
	search: '',
	beforeSearch: '',
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setAddRemoveFavorite(state, action) {
			state.arr = action.payload;
		},
		setAddBusket(state, action) {
			state.arr = action.payload;
		},
		setRemoveBusket(state, action) {
			state.arr = action.payload;
		},
		setCountPlus(state, action) {
			state.arr = action.payload;
		},
		setCountMinus(state, action) {
			state.arr = action.payload;
		},
		setSearch(state, action) {
			state.search = action.payload;
		},
		setWhereIWas(state, action) {
			state.beforeSearch = action.payload !== '/search' ? action.payload : state.beforeSearch;
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
		builder.addCase(fetchOldInfo.fulfilled, (state, action) => {
			state.arr = action.payload;
		});
		builder.addCase(fetchOldInfo.rejected, (state, action) => {
			console.log(action.error);
			console.log(action.type);
			console.log(action.meta);
		});
	},
});

export const { setAddRemoveFavorite, setAddBusket, setRemoveBusket, setCountPlus, setCountMinus, setSearch, setWhereIWas } = productSlice.actions;

export default productSlice.reducer;
