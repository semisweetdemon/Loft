import React, { useState } from 'react';
import { useTitle } from 'ahooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCountPlus, setCountMinus, setAddBusket, setAddRemoveFavorite } from '../redux/Slices/productSlice';
import { wishlist } from '../components';
import { functionAddBusket, functionAddRemoveFavorite, functionCountMinus, functionCountPlus } from '../App';
import Specifications from '../components/Specifications';
import Reviews from '../components/Reviews';

const ProductPage = () => {
	const [off, setOff] = useState(false)
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

	React.useEffect(() => {
		arr.find((el) => {
			if (el.path === '/' + searchProduct[0]) {
				setParentElem(el.categoryName);
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
								Главная
							</h4>
							<h4>/</h4>
							<h4 onClick={() => navigate(product.parent)} style={{ cursor: 'pointer' }}>
								{parentElem}
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
								{product.color !== '' && <h6>Цвет {product.color}</h6>}
								<div className="info__count">
									<button onClick={() => dispatch(setCountMinus(functionCountMinus(arr, product, aboutuser)))}>-</button>
									<h3>{product.count}</h3>
									<button onClick={() => dispatch(setCountPlus(functionCountPlus(arr, product, aboutuser)))}>+</button>
								</div>
								<div className="info__add">
									<button onClick={() => dispatch(setAddBusket(functionAddBusket(arr, product, aboutuser)))}>
										<p>Добавить в корзину</p>
									</button>
									<button onClick={() => dispatch(setAddRemoveFavorite(functionAddRemoveFavorite(arr, product, aboutuser)))}>
										<div className={product.favorite ? 'icon' : ''}>{wishlist}</div>
										<p>Добавить в желаемое</p>
									</button>
								</div>
								<p>{product.description}</p>
								<div className="info__review">
									<textarea onChange={(e) => setInputValue(e.target.value)} placeholder="Отзыв к товару" value={inputValue}></textarea>
									<button onClick={() => {}}>Send review</button>
								</div>
							</div>
						</div>
						<div className="info__product">
							<div className="info__product__btns">
								<button onClick={() => {setOff(false)}} style={{
									borderBottom: !off ? '3px solid #000' : ''
								}}>Характеристики</button>
								<button onClick={() => {setOff(true)}}>Отзывы</button>
								<button>Доставка и оплата</button>
							</div>
							<div className="specifications" style={{
								display: !off ? 'block' : ''
							}}>
								<Specifications el={product} />
							</div>
							<div className="reviews" style={{
								display: !off ? '' : 'block'
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
