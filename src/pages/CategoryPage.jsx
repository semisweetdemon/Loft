import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const CategoryPage = () => {
	const { arr } = useSelector((state) => state.products);
	const [categoryInfo, setCategoryInfo] = React.useState({});
	const { pathname } = useLocation();

	React.useEffect(() => {
		arr.map((el) => (el.path === pathname ? setCategoryInfo(el) : null));
	}, [pathname]);

	console.log(categoryInfo);

	return (
		<section id="category">
			<div className="container">
				<div className="category">
					<h1>{categoryInfo.categoryName}</h1>
				</div>
			</div>
		</section>
	);
};

export default CategoryPage;
