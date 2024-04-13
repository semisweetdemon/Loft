import React, { useState } from 'react';
import { useTitle } from 'ahooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setCountPlus, setCountMinus, setAddBusket, setAddRemoveFavorite } from '../redux/Slices/productSlice';
import { wishlist } from '../components';
import { functionAddBusket, functionAddRemoveFavorite, functionCountMinus, functionCountPlus } from '../App';
import Specifications from '../components/Specifications';
import Reviews from '../components/Reviews';

const ProductPage = () => {
	const [off, setOff] = useState(false);
	const { arr } = useSelector((state) => state.products);
	const { aboutuser } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [product, setProduct] = React.useState(null);
	const [parentElem, setParentElem] = React.useState('');
	const { pathname } = useLocation();
	const searchProduct = pathname.split('/').filter((el) => el);
	useTitle(product?.name);
	const [inputValue, setInputValue] = React.useState('');
	const { t } = useTranslation();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	React.useEffect(() => {
		arr.find((el) => {
			if (el.path === '/' + searchProduct[0]) {
				setParentElem(el);
				el.categoryProducts.find((elem) => {
					if (elem.id === +searchProduct[1]) {
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
							<h4 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
								{t('home')}
							</h4>
							<h4>/</h4>
							<h4 onClick={() => navigate(product.parent)} style={{ cursor: 'pointer' }}>
								{t(parentElem.categoryIconName)}
							</h4>
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
								{product.color !== '' && (
									<h6>
										{t('color')} {product.color}
									</h6>
								)}
								<div className="info__count">
									<button onClick={() => dispatch(setCountMinus(functionCountMinus(arr, product, aboutuser)))}>-</button>
									<h3>{product.count}</h3>
									<button onClick={() => dispatch(setCountPlus(functionCountPlus(arr, product, aboutuser)))}>+</button>
								</div>
								<div className="info__add">
									<button onClick={() => dispatch(setAddBusket(functionAddBusket(arr, product, aboutuser)))}>
										<p>{t('addBusket')}</p>
									</button>
									<button onClick={() => dispatch(setAddRemoveFavorite(functionAddRemoveFavorite(arr, product, aboutuser)))}>
										<div className={product.favorite ? 'icon' : ''}>{wishlist}</div>
										<p>{t('addWishlist')}</p>
									</button>
								</div>
								<p>{product.description}</p>
								<div className="info__review">
									<textarea onChange={(e) => setInputValue(e.target.value)} placeholder={t('productReview')} value={inputValue}></textarea>
									<button onClick={() => {}}>{t('senReview')}</button>
								</div>
							</div>
						</div>
						<div className="info-product">
							<div className="info-product__btns">
								<button
									onClick={() => {
										setOff(false);
									}}
									style={{
										borderBottom: !off ? '3px solid #000' : '',
									}}>
									{t('characteristics')}
								</button>
								<button
									onClick={() => {
										setOff(true);
									}}>
									{t('description')}
								</button>
								<button>{t('deliver')}</button>
							</div>
							<div
								className="specifications"
								style={{
									display: !off ? 'block' : '',
								}}>
								<Specifications product={product} />
							</div>
							<div
								className="reviews"
								style={{
									display: !off ? '' : 'block',
								}}>
								<Reviews />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

export default ProductPage;
