import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '../components';
import { useTitle } from 'ahooks';
import { useTranslation } from 'react-i18next';

const CategoryPage = () => {
	const { arr } = useSelector((state) => state.products);
	const [categoryInfo, setCategoryInfo] = React.useState({});
	const [sortBy, setSortBy] = React.useState('none');
	const { pathname } = useLocation();
	const navigate = useNavigate();
	useTitle(pathname.charAt(1).toUpperCase() + pathname.slice(2));
	const { t } = useTranslation();

	React.useEffect(() => {
		arr.map((el) => {
			if (el.path === pathname) {
				switch (sortBy) {
					case 'none':
						setCategoryInfo(el);
						break;
					case 'a-z':
						let arrAZ = [...el.categoryProducts];
						setCategoryInfo({ ...el, categoryProducts: arrAZ.sort((a, b) => a.name.localeCompare(b.name)) });
						break;
					case 'z-a':
						let arrZA = [...el.categoryProducts];
						setCategoryInfo({ ...el, categoryProducts: arrZA.sort((a, b) => b.name.localeCompare(a.name)) });
						break;
					case 'price':
						let price = [...el.categoryProducts];
						setCategoryInfo({ ...el, categoryProducts: price.sort((a, b) => Number(b.price) - Number(a.price)) });
						break;
					default:
						setCategoryInfo(el);
						break;
				}
			}
		});
	}, [pathname, arr, sortBy]);

	React.useEffect(() => {
		setSortBy('none');
	}, [pathname]);

	return (
		<section id="category">
			<div className="container">
				<div className="category" style={{ minHeight: '60vh' }}>
					<div className="category__nav navigate">
						<h4 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
							{t('home')}
						</h4>
						<h4>/</h4>
						<h4>{t(categoryInfo.categoryIconName)}</h4>
					</div>
					<div className="category__sort">
						<h3>{t('chapter')}</h3>
						<div>
							<select
								onChange={(e) => {
									for (let i of arr) {
										i.categoryName === e.target.value ? navigate(i.path) : null;
									}
								}}
								value={categoryInfo.categoryName}>
								{arr.map((el) => (
									<option key={el.id} value={el.categoryName}>
										{t(el.categoryIconName)}
									</option>
								))}
							</select>
							<select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
								<option value="none">{t('none')}</option>
								<option value="a-z">{t('az')}</option>
								<option value="z-a">{t('za')}</option>
								<option value="price">{t('price')}</option>
							</select>
						</div>
					</div>
					<div className="category__products cards">
						{categoryInfo.categoryProducts?.map((el) => (
							<Card key={el.id} el={el} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CategoryPage;
