// import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import Admin from '../pages/Admin';
import Sale from '../pages/Sale';
import ProductPage from '../pages/ProductPage';
import About from '../pages/About';
import Busket from '../pages/Busket';
import Favorite from '../pages/Favorite';
import Search from '../pages/Search';

const MainRouter = () => {
	const PAGES = [
		{ path: '/', element: <Home />, key: 1 },
		{ path: '/about', element: <About />, key: 2 },
		{ path: '/:id', element: <CategoryPage />, key: 3 },
		{ path: '/admin', element: <Admin />, key: 4 },
		{ path: '/sale', element: <Sale />, key: 5 },
		{ path: '/:id/:product', element: <ProductPage />, key: 6 },
		{ path: '/busket', element: <Busket />, key: 7 },
		{ path: '/favorite', element: <Favorite />, key: 8 },
		{ path: '/search', element: <Search />, key: 9 },
	];

	return (
		<Routes>
			{PAGES.map((el) => (
				<Route path={el.path} element={el.element} key={el.key} />
			))}
		</Routes>
	);
};

export default MainRouter;
