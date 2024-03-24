import { configureStore } from '@reduxjs/toolkit';
import admin from './Slices/adminSlice';
import products from './Slices/productSlice';

export const store = configureStore({
	reducer: {
		products,
		admin,
	},
});
