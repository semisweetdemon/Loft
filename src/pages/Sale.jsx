import { useTitle } from 'ahooks';
import React from 'react';

const Sale = () => {
	useTitle('Sale');

	return (
		<section id="sale">
			<div className="container">
				<div className="sale"></div>
			</div>
		</section>
	);
};

export default Sale;
