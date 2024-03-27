import React from 'react';
import { useTitle } from 'ahooks';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCountPlus, setCountMinus, setAddBusket, setAddRemoveFavorite } from '../redux/Slices/productSlice';
import { wishlist } from '../components';

const ProductPage = () => {
	const { arr } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const [product, setProduct] = React.useState(null);
	const { pathname } = useLocation();
	const searchProduct = pathname
		.split('/')
		.filter((el) => el)
		.map((el) => '/' + el);
	useTitle(product?.name);

	React.useEffect(() => {
		arr.find((el) => {
			if (el.path === searchProduct[0]) {
				el.categoryProducts.find((elem) => {
					if (elem.path === searchProduct[1]) {
						setProduct(elem);
					}
				});
			}
		});
		return () => setProduct({});
	}, [arr, pathname]);

	if (product) {
		return (
			<section id="product">
				<div className="container">
					<div className="product">
						<div className="product__nav navigate">
							<h4>Главная</h4>
							<h4>/</h4>
							<h4>{product.parent.charAt(1).toUpperCase() + product.parent.slice(2)}</h4>
							<h4>/</h4>
							<h4>{product.name}</h4>
						</div>
						<div className="product__info info">
							<div className="info__image">
								<img src={product.image} alt="Product doesnt have image" />
							</div>
							<div className="info__text">
								<h3>{product.name}</h3>
								<h6>{product.subcategory}</h6>
								<h3>${product.price}</h3>
								<h6>Цвет {product.color}</h6>
								<div className="info__count">
									<button onClick={() => dispatch(setCountMinus(product))}>-</button>
									<h3>{product.count}</h3>
									<button onClick={() => dispatch(setCountPlus(product))}>+</button>
								</div>
								<div className="info__add">
									<button onClick={() => dispatch(setAddBusket(product))}>
										<p>Добавить в корзину</p>
									</button>
									<button onClick={() => dispatch(setAddRemoveFavorite(product))}>
										<div className={product.favorite ? 'icon' : ''}>{wishlist}</div>
										<p>Добавить в желаемое</p>
									</button>
								</div>
								<p>{product.description}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

export default ProductPage;
