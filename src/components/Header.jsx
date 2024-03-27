// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logo, wishlist, bag, profile, search, call, delivery } from '../components';
import { useSelector } from 'react-redux';
import * as icons from './icons';

export const Header = () => {
	const category = useSelector((state) => state.products);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<header id="header">
			<div className="container">
				<div className="header">
					<div className="header__top">
						<div className="logo">
							<div className="burger">
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
							<input type="text" placeholder="Поиск" />
						</div>
						<div className="delivery">
							<Link>{call} 8 (964) 89 99 119</Link>
							<Link>{delivery} Доставка</Link>
						</div>
						<div className="profile">
							<div>{wishlist} </div>
							<div>{bag} </div>
							<div onClick={() => navigate('/admin')}>{profile} </div>
						</div>
					</div>
					{pathname !== '/about' && (
						<div className="header__navigation">
							<div className="sale" onClick={() => navigate('/sale')} key={'/sale'}>
								{icons.sale}
								Акции
							</div>
							{category.arr.map((el) => (
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
