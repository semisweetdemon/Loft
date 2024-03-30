// import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import Admin from '../pages/Admin';
import Sale from '../pages/Sale';
import ProductPage from '../pages/ProductPage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Massage from '../components/Massage';

const MainRouter = () => {
	const PAGES = [
		{ path: '/', element: <Home />, key: 1 },
		{ path: '/about', element: <About />, key: 2 },
		{ path: '/:id', element: <CategoryPage />, key: 3 },
		{ path: '/admin', element: <Admin />, key: 4 },
		{ path: '/sale', element: <Sale />, key: 5 },
		{ path: '/:id/:product', element: <ProductPage />, key: 6 },
		{ path: '/contact', element: <Contact />, key: 7 },
		{ path: '/massage', element: <Massage />, key: 8 },

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
