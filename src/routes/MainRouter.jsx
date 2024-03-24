import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import Admin from '../pages/Admin';

const MainRouter = () => {
	const PAGES = [
		{ path: '/', element: <Home />, key: 1 },
		{ path: '/:id', element: <CategoryPage />, key: 2 },
		{ path: '/admin', element: <Admin />, key: 3 },
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
