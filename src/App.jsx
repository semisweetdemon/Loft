import React from 'react';
import './App.scss';

import { Header, Footer } from './components';
import MainRouter from './routes/MainRouter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './redux/Slices/productSlice';

function App() {
	const { status } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchProduct());
	}, []);

	if (status === 'loading' || status === 'error') {
		return (
			<>
				<h1>{status === 'loading' ? 'Loading...' : 'Error!'}</h1>
			</>
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
