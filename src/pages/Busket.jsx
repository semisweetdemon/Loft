import React from 'react';
import { useTitle } from 'ahooks';
import { useSelector } from 'react-redux';
import { BusketCard } from '../components';
import { useNavigate } from 'react-router-dom';

const Busket = () => {
	useTitle('Busket');
	const { arr } = useSelector((state) => state.products);
	const [busketItems, setBusketItems] = React.useState([]);
	const [allPrice, setAllPrice] = React.useState(0);
	const navigate = useNavigate();

	React.useEffect(() => {
		let array = [];
		let sum = 0;
		arr.map((el) => {
			el.categoryProducts.map((elem) => (elem.busket === true ? array.push(elem) : null));
		});
		array.map((el) => (sum += Number(el.price) * el.count));
		setAllPrice(sum);
		setBusketItems(array);
	}, [arr]);

	if (busketItems) {
		return (
			<section id="busket">
				<div className="container">
					<div className="busket" style={{ minHeight: '58vh' }}>
						<div className="busket__nav navigate">
							<h4 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
								Главная
							</h4>
							<h4>/</h4>
							<h4>Корзина</h4>
						</div>
						<div className="busket__counter">
							<h5>Ваша корзина</h5>
							<div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
								<h5>${allPrice} Общаяя сумма</h5>
								<h5>{busketItems.length} штук</h5>
							</div>
						</div>
						<div className="busket__cards">
							{busketItems?.map((el) => (
								<BusketCard key={el.id} el={el} />
							))}
						</div>
						<div className="busket__button">
							<button className="">Оформить заказ</button>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

export default Busket;
