import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';

const MainRouter = () => {
	const PAGES = [{ path: '/', element: <Home />, key: 1 }];
	return (
		<Routes>
			{PAGES.map((el) => (
				<Route path={el.path} element={el.element} key={el.key} />
			))}
		</Routes>
	);
};

export default MainRouter;
