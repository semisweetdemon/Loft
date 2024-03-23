import { configureStore } from '@reduxjs/toolkit';
import admin from './Slices/adminSlice';

export const store = configureStore({
	reducer: {
		admin,
	},
});
