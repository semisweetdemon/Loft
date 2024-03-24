// import React from 'react';
import { Link } from 'react-router-dom'
import { bag, call, logo, profile, search, wishlist } from './icons'

export const Header = () => {
	return (
		<header id='header'>
			<div className='container'>
				<div className='header'>
					<div className='header__top'>
						<div className='logo'>
							{logo}
							<nav>
								<Link>Главная</Link>
								<Link>О нас</Link>
								<Link>Контакты</Link>
							</nav>
						</div>
						<div className='search'>
							{search}
							<input type='text' placeholder='Поиск' />
						</div>
						<div className='delivery'>
							{call}
							<Link>8 (964) 89 99 119</Link>
						</div>
						<div className='profile'>
							{wishlist}
							{bag}
							{profile}
						</div>
					</div>
					<div className='header__navigation'></div>
				</div>
			</div>
		</header>
	)
}
