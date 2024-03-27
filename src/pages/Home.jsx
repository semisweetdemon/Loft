// import React from 'react';

import { useTitle } from 'ahooks';

const Home = () => {
	useTitle('Loft');

	return (
		<section id="home">
			<div className="container">
				<div className="home">
					<div className="home__swiper"></div>
				</div>
			</div>
		</section>
	);
};

export default Home;
