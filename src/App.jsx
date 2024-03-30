import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFavicon } from 'ahooks';
import axios from 'axios';

import './App.scss';
import { Header, Footer } from './components';
import MainRouter from './routes/MainRouter';
import { fetchOldInfo, fetchProduct } from './redux/Slices/productSlice';
import { fetchAboutUser } from './redux/Slices/SaveSlice';
import { userApi } from './redux/Slices/SaveSlice';

const fetchBusketAndFavorite = (massive, user) => {
	let array = [];
	for (let i of massive) {
		i.categoryProducts.map((el) => {
			if (el.busket === true || el.favorite === true) {
				let newObj = { id: el.id, count: el.busket === true ? el.count : 1, busket: el.busket, favorite: el.favorite };
				array.push(newObj);
			}
		});
	}
	const newUserInfo = { ...user, busketAndFavorite: array };
	axios.patch(userApi, newUserInfo);
};

export const functionAddRemoveFavorite = (arr, element, profile) => {
	let findParent = arr.find((el) => el.path === element.parent);
	let newArr = findParent.categoryProducts.map((elem) => {
		if (elem.id === element.id) {
			return elem.favorite === true ? { ...elem, favorite: false } : { ...elem, favorite: true };
		}
		return elem;
	});
	let newArray = arr.map((el) => (el.path === element.parent ? { ...findParent, categoryProducts: newArr } : el));
	fetchBusketAndFavorite(newArray, profile);
	return newArray;
};

export const functionAddBusket = (arr, element, profile) => {
	let findParent = arr.find((el) => el.path === element.parent);
	let newArr = findParent.categoryProducts.map((elem) => {
		if (elem.id === element.id) {
			return elem.busket === true ? { ...elem, count: element.count + 1 } : { ...elem, busket: true };
		}
		return elem;
	});
	let newArray = arr.map((el) => (el.path === element.parent ? { ...findParent, categoryProducts: newArr } : el));
	fetchBusketAndFavorite(newArray, profile);
	return newArray;
};

export const functionRemoveBusket = (arr, element, profile) => {
	let findParent = arr.find((el) => el.path === element.parent);
	let newArr = findParent.categoryProducts.map((elem) => {
		if (elem.id === element.id) {
			return { ...elem, busket: false, count: 1 };
		}
		return elem;
	});
	let newArray = arr.map((el) => (el.path === element.parent ? { ...findParent, categoryProducts: newArr } : el));
	fetchBusketAndFavorite(newArray, profile);
	return newArray;
};

export const functionCountPlus = (arr, element, profile) => {
	let findParent = arr.find((el) => el.path === element.parent);
	let newArr = findParent.categoryProducts.map((elem) => {
		if (elem.id === element.id) {
			return { ...elem, count: element.count + 1 };
		}
		return elem;
	});
	let newArray = arr.map((el) => (el.path === element.parent ? { ...findParent, categoryProducts: newArr } : el));
	fetchBusketAndFavorite(newArray, profile);
	return newArray;
};

export const functionCountMinus = (arr, element, profile) => {
	let findParent = arr.find((el) => el.path === element.parent);
	let newArr = findParent.categoryProducts.map((elem) => {
		if (elem.id === element.id) {
			return element.count > 1 ? { ...elem, count: element.count - 1 } : { ...elem };
		}
		return elem;
	});
	let newArray = arr.map((el) => (el.path === element.parent ? { ...findParent, categoryProducts: newArr } : el));
	fetchBusketAndFavorite(newArray, profile);
	return newArray;
};

function App() {
	const { status } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	useFavicon('https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-sofa-line-icon-vector-png-image_6677342.png');

	React.useEffect(() => {
		dispatch(fetchProduct());
		dispatch(fetchAboutUser());
		dispatch(fetchOldInfo());
	}, []);

	if (status === 'loading' || status === 'error') {
		return (
			<div className="container">
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
					<h1>{status === 'loading' ? 'Loading...' : 'Error!'}</h1>
				</div>
			</div>
		);
	}

	return (
		<>
			<Header />
			<MainRouter />
			<Footer />
		</>
	);
}

export default App;
