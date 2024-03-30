import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logo, wishlist, bag, profile, search, call, delivery, home, remove, about, contact } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import * as icons from './icons';
import { useClickAway } from 'ahooks';
import { setSearch, setWhereIWas } from '../redux/Slices/productSlice';

export const Header = () => {
	const { arr, beforeSearch } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [burger, setBurger] = React.useState(false);
	const [inputValue, setInputValue] = React.useState('');
	const burgerRef = React.useRef(null);
	let n = 0;
	const burgerFalse = () => {
		setBurger(false);
		n = 0;
	};
	useClickAway(() => {
		if (n > 0) {
			burgerFalse();
		}
		n++;
	}, burgerRef);

	React.useEffect(() => {
		if (inputValue === '') {
			beforeSearch.length !== 0 ? navigate(beforeSearch) : navigate(pathname);
		}
	}, [inputValue]);

	return (
		<header id="header">
			<div ref={burgerRef} className={burger ? 'burger-items show' : 'burger-items'}>
				<div className="burger-items__close">
					<h4>Меню</h4>
					<button
						onClick={() => {
							setBurger(false);
							n = 0;
						}}>
						{remove}
					</button>
				</div>
				<div className="burger-items__profile">
					<div
						onClick={() => {
							navigate('/');
							burgerFalse();
						}}
						className="route-items">
						<div>{home}</div>
						<h5>Главная</h5>
					</div>
					<div
						onClick={() => {
							navigate('/about');
							burgerFalse();
						}}
						className="route-items">
						<div>{about}</div>
						<h5>О нас</h5>
					</div>
					<div className="route-items">
						<div>{contact}</div>
						<h5>Контакты</h5>
					</div>
					<div
						onClick={() => {
							navigate('/favorite');
							burgerFalse();
						}}
						className="route-items">
						<div>{wishlist}</div>
						<h5>Избранное</h5>
					</div>
					<div
						onClick={() => {
							navigate('/busket');
							burgerFalse();
						}}
						className="route-items">
						<div>{bag}</div>
						<h5>Корзина</h5>
					</div>
				</div>
				<div className="burger-items__navigation">
					{arr.map((el) => (
						<div
							className="route-items"
							onClick={() => {
								navigate(el.path);
								burgerFalse();
							}}
							key={el.path}>
							<div>{icons[el.categoryIconName]}</div>
							<h5>{el.categoryName}</h5>
						</div>
					))}
				</div>
			</div>
			<div className="container">
				<div className="header">
					<div className="header__top">
						<div className="logo">
							<div onClick={() => setBurger(true)} className="burger">
								<span></span>
								<span></span>
								<span></span>
							</div>
							<div onClick={() => navigate('/')}>{logo}</div>
							<nav>
								<Link to="/">Главная</Link>
								<Link to="/about">О нас</Link>
								<Link>Контакты</Link>
							</nav>
						</div>
						<div className="search">
							{search}
							<input
								onChange={(event) => {
									dispatch(setWhereIWas(pathname));
									setInputValue(event.target.value);
									dispatch(setSearch(event.target.value));
									navigate('/search');
								}}
								type="text"
								placeholder="Поиск"
								value={inputValue}
							/>
						</div>
						<div className="delivery">
							<Link>{call} 8 (964) 89 99 119</Link>
							<Link>{delivery} Доставка</Link>
						</div>
						<div className="profile">
							<div onClick={() => navigate('/favorite')}>{wishlist} </div>
							<div onClick={() => navigate('/busket')}>{bag} </div>
							<div onClick={() => navigate('/admin')}>{profile} </div>
						</div>
					</div>
					{pathname !== '/about' && (
						<div className="header__navigation">
							{/* <div className="sale" onClick={() => navigate('/sale')} key={'/sale'}>
								{icons.sale}
								Акции
							</div> */}
							{arr.map((el) => (
								<div onClick={() => navigate(el.path)} key={el.path}>
									{icons[el.categoryIconName]}
									{el.categoryName}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</header>
	);
};
