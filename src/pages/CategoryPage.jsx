import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '../components';
import { useTitle } from 'ahooks';

const CategoryPage = () => {
	const { arr } = useSelector((state) => state.products);
	const [categoryInfo, setCategoryInfo] = React.useState({});
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [selectValuePathname, setSelectValuePathname] = React.useState(pathname);
	useTitle(pathname.charAt(1).toUpperCase() + pathname.slice(2));

	React.useEffect(() => {
		arr.map((el) => {
			if (el.path === pathname) {
				setCategoryInfo(el);
			}
		});
	}, [pathname, arr]);

	return (
		<section id="category">
			<div className="container">
				<div className="category">
					<div className="category__nav navigate">
						<h4>Главная</h4>
						<h4>/</h4>
						<h4>{categoryInfo.categoryName}</h4>
					</div>
					<div className="category__sort">
						<h3>Раздел</h3>
						<select
							onChange={(e) => {
								setSelectValuePathname(e.target.value);
								navigate(e.target.value);
							}}
							value={selectValuePathname}>
							{arr.map((el) => (
								<option key={el.id} value={el.path}>
									{el.categoryName}
								</option>
							))}
						</select>
						{/* <input onDragOver={(e) => e} type="range" placeholder="price" max={max} min={min} step={1} /> */}
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

// const [min, setMin] = React.useState(0);
// const [max, setMax] = React.useState(0);
// let sideArray = [];
// el.categoryProducts.map((el) => sideArray.push(+el.price));
// setMin(Math.min(...sideArray));
// setMax(Math.max(...sideArray));
// console.log(min);
// console.log(max);
