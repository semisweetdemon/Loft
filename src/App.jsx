import './App.scss';

import { Header, Footer } from './components';
import MainRouter from './routes/MainRouter';

function App() {
	return (
		<>
			<Header />
			<MainRouter />
			<Footer />
		</>
	);
}

export default App;
