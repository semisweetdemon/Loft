import React from 'react';
import { logo } from './icons';

export const Header = () => {
	return (
		<header id="header">
			<div className="container">
				<div className="header">
					<div className="header__top">{logo}</div>
					<div className="header__navigation"></div>
				</div>
			</div>
		</header>
	);
};
