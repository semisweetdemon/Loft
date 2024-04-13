import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway } from 'ahooks';
import { useTranslation } from 'react-i18next';

import { logo, wishlist, bag, profile, search, call, delivery, home, remove, about, contact } from '../components';
import * as icons from './icons';
import { setSearch, setWhereIWas } from '../redux/Slices/productSlice';
import { setLanguage } from '../redux/Slices/langSlice';

export const Header = () => {
	const { t, i18n } = useTranslation();
	const { arr, beforeSearch } = useSelector((state) => state.products);
	const { language } = useSelector((state) => state.language);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [burger, setBurger] = React.useState(false);
	const [inputValue, setInputValue] = React.useState('');
	const burgerRef = React.useRef(null);
	const [lang, setLang] = React.useState(language);

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

	React.useEffect(() => {
		lang === 'ru' ? i18n.changeLanguage('ru') : i18n.changeLanguage('en');
		dispatch(setLanguage(lang));
		localStorage.setItem('lang', JSON.stringify(lang));
	}, [lang]);

	return (
		<header id="header">
			<div ref={burgerRef} className={burger ? 'burger-items show' : 'burger-items'}>
				<div className="burger-items__close">
					<h4>{t('menu')}</h4>
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
						<h5>{t('home')}</h5>
					</div>
					<div
						onClick={() => {
							navigate('/about');
							burgerFalse();
						}}
						className="route-items">
						<div>{about}</div>
						<h5>{t('about')}</h5>
					</div>
					<div className="route-items">
						<div>{contact}</div>
						<h5>{t('contact')}</h5>
					</div>
					<div
						onClick={() => {
							navigate('/favorite');
							burgerFalse();
						}}
						className="route-items">
						<div>{wishlist}</div>
						<h5>{t('wishlist')}</h5>
					</div>
					<div
						onClick={() => {
							navigate('/busket');
							burgerFalse();
						}}
						className="route-items">
						<div>{bag}</div>
						<h5>{t('busket')}</h5>
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
								<Link to="/">{t('home')}</Link>
								<Link to="/about">{t('about')}</Link>
								<Link to="/contact">{t('contact')}</Link>
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
								placeholder={t('inputSearch')}
								value={inputValue}
							/>
							<select onChange={(e) => setLang(e.target.value)} className="language-button" value={lang}>
								<option value="en">en</option>
								<option value="ru">ru</option>
							</select>
						</div>
						<div className="delivery">
							<Link>{call} 8 (964) 89 99 119</Link>
							<Link>
								{delivery} {t('delivery')}
							</Link>
						</div>
						<div className="profile">
							<div onClick={() => navigate('/favorite')}>{wishlist} </div>
							<div onClick={() => navigate('/busket')}>{bag} </div>
							<div onClick={() => navigate('/admin')}>{profile} </div>
						</div>
					</div>
					{pathname !== '/about' && (
						<div className="header__navigation">
							{arr.map((el) => (
								<div onClick={() => navigate(el.path)} key={el.path}>
									{icons[el.categoryIconName]}
									{t(el.categoryIconName)}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</header>
	);
};
