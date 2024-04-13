import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components';
import { useTranslation } from 'react-i18next';

const Search = () => {
	const { arr, search } = useSelector((state) => state.products);
	const [searchProducts, setSearchProducts] = React.useState([]);
	const { t } = useTranslation()

	React.useEffect(() => {
		let array = [];
		for (let i of arr) {
			i.categoryProducts.map((el) => {
				el.name.toLowerCase().includes(search.toLowerCase()) === true ? array.push(el) : null;
			});
		}
		setSearchProducts(array);
	}, [search]);

	return (
		<section id="search">
			<div className="container">
				<div className="search" style={{ minHeight: '58vh' }}>
					<h1>{t('inputSearch')}</h1>
					<div className="cards">
						{searchProducts.map((el) => (
							<Card el={el} />
						))}
					</div>
					{search.length !== 0 && searchProducts.length === 0 && (
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh' }}>
							<h1>{t('searchUnknown')}</h1>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Search;
