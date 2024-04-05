import React from 'react';
('react-router-dom');

const Specifications = ({ product }) => {
	return (
		<div className="specifications">
			<div className="block">
				<div className="specification_1">
					<h3>Размер</h3>
					<h3>{product.size}</h3>
					<h3>Спальное место</h3>
					<h3>{product.sleepingPlace}</h3>
					<h3>Посадочное место</h3>
					<h3>{product.seat}</h3>
					<h3>Каркас</h3>
					<h3>{product.skeleton}</h3>
					<h3>Механизм</h3>
					<h3>{product.mechanism}</h3>
					<h3>Материал ножек</h3>
					<h3>{product.theMaterialOfTheLegs}</h3>
					<h3>Наполнение подушек</h3>
					<h3>{product.fillingPillows}</h3>
				</div>
				<div className="specification_1">
					<h3>Бельевой ящик</h3>
					<h3>{product.linenDrawer}</h3>
					<h3>Зарядное устройство USB</h3>
					<h3>{product.usbCharger}</h3>
					<h3>Съемный чехол</h3>
					<h3>{product.removableCover}</h3>
					<h3>Декоративные подушки</h3>
					<h3>{product.decorativePillows}</h3>
					<h3>Вариант доставки</h3>
					<h3>{product.delivery}</h3>
					<h3>Производитель</h3>
					<h3>{product.manufacturer}</h3>
				</div>
			</div>
		</div>
	);
};

export default Specifications;
