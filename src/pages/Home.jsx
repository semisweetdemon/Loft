import React from 'react';
import { useTitle } from 'ahooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { useSelector } from 'react-redux';
import { Card } from '../components';
// import first from '../assets/images/first.jpg';

const Home = () => {
	const { arr } = useSelector((state) => state.products);
	const [homeProducts, setHomeProducts] = React.useState([]);
	useTitle('Loft');

	React.useEffect(() => {
		let item = [];
		for (let i of arr) {
			i.categoryProducts.map((elem) => item.push(elem));
		}
		setHomeProducts(item);
	}, [arr]);

	return (
		<section id="home">
			<div className="container">
				<div className="home" style={{ minHeight: '58vh' }}>
					<div className="home__swiper">
						<Swiper
							spaceBetween={30}
							centeredSlides={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							pagination={{
								type: 'progressbar',
							}}
							speed={800}
							loop={true}
							navigation={true}
							modules={[Autoplay, Pagination, Navigation]}
							className="swiper">
							<SwiperSlide>
								<img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Oversize" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Oversize" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="https://plus.unsplash.com/premium_photo-1670359037486-41aa5e6594ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Oversize" />
							</SwiperSlide>
						</Swiper>
					</div>
					<div className="cards">
						{homeProducts.map((el) => (
							<Card key={el.id} el={el} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
