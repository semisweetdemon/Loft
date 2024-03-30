import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMassage = createAsyncThunk('massage/fetchGetProduct', async () => {
	const data = axios('http://localhost:3000/massage').then((res) => res.data);
	return data;
});