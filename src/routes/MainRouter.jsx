// import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import Admin from '../pages/Admin';
import About from '../pages/About';

const MainRouter = () => {
	const PAGES = [
		{ path: '/', element: <Home />, key: 1 },
		{ path: '/about', element: <About />, key: 2 },
		{ path: '/:id', element: <CategoryPage />, key: 3 },
		{ path: '/admin', element: <Admin />, key: 4 },
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
