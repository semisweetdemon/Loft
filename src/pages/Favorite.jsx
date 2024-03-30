import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components';

const Favorite = () => {
	const { arr } = useSelector((state) => state.products);
	const [favorite, setFavorite] = React.useState([]);

	React.useEffect(() => {
		let array = [];
		for (let i of arr) {
			i.categoryProducts.map((el) => {
				el.favorite === true ? array.push(el) : null;
			});
		}
		setFavorite(array);
	}, [arr]);

	return (
		<section id="favorite">
			<div className="container">
				<div className="favorite" style={{ minHeight: '58vh' }}>
					<h2>Favorite</h2>
					<div className="cards">
						{favorite.map((el) => (
							<Card el={el} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Favorite;
