import { configureStore } from '@reduxjs/toolkit';
import admin from './Slices/adminSlice';
import products from './Slices/productSlice';
import user from './Slices/SaveSlice';
import comment from './Slices/commentSlice';

export const store = configureStore({
	reducer: {
		products,
		admin,
		user,
		comment,
	},
});
