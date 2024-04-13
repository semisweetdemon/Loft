('react-router-dom');

const Specifications = ({ el }) => {
	return (
		<div className="specifications">
			{
				<div className="block">
				<div className="specification_1">
					<h3>Размер</h3>
					<h3>{el.size}</h3>
					<h3>Спальное место</h3>
					<h3>{el.sleepingPlace}</h3>
					<h3>Посадочное место</h3>
					<h3>{el.seat}</h3>
					<h3>Каркас</h3>
					<h3>{el.skeleton}</h3>
					<h3>Механизм</h3>
					<h3>{el.mechanism}</h3>
					<h3>Материал ножек</h3>
					<h3>{el.theMaterialOfTheLegs}</h3>
					<h3>Наполнение подушек</h3>
					<h3>{el.fillingPillows}</h3>
				</div>
				<div className="specification_1">
					<h3>Бельевой ящик</h3>
					<h3>{el.linenDrawer}</h3>
					<h3>Зарядное устройство USB</h3>
					<h3>{el.usbCharger}</h3>
					<h3>Съемный чехол</h3>
					<h3>{el.removableCover}</h3>
					<h3>Декоративные подушки</h3>
					<h3>{el.decorativePillows}</h3>
					<h3>Вариант доставки</h3>
					<h3>{el.delivery}</h3>
					<h3>Производитель</h3>
					<h3>{el.manufacturer}</h3>
				</div>
			</div>
			}
		</div>
	);
};

export default Specifications;
