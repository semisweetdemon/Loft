// import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../components';
import { setCountMinus, setCountPlus, setRemoveBusket } from '../redux/Slices/productSlice';
import { functionCountMinus, functionCountPlus, functionRemoveBusket } from '../App';

export const BusketCard = ({ el }) => {
	const { arr } = useSelector((state) => state.products);
	const { aboutUser } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	return (
		<div className="busketcard">
			<div className="busketcard__image">
				<img src={el.image} alt="Product image" />
			</div>
			<div className="busketcard__info">
				<h3>{el.name}</h3>
				{el.color !== '' && <h6>Цвет: {el.color}</h6>}
			</div>
			<div className="busketcard__counter">
				<button onClick={() => dispatch(setCountMinus(functionCountMinus(arr, el, aboutUser)))}>-</button>
				<h4>{el.count}</h4>
				<button onClick={() => dispatch(setCountPlus(functionCountPlus(arr, el, aboutUser)))}>+</button>
			</div>
			<div className="busketcard__end">
				<h4>${el.price}</h4>
				<button onClick={() => dispatch(setRemoveBusket(functionRemoveBusket(arr, el, aboutUser)))}>{remove}</button>
			</div>
		</div>
	);
};
