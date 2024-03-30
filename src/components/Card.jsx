import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wishlist } from '../components';
import { setAddRemoveFavorite, setAddBusket } from '../redux/Slices/productSlice';
import { useNavigate } from 'react-router-dom';
import { functionAddBusket, functionAddRemoveFavorite } from '../App';

export const Card = ({ el }) => {
	const { arr } = useSelector((state) => state.products);
	const { aboutuser } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className="card">
			<div className="card__hover">
				<div className="card__image">
					<div
						onClick={() => {
							dispatch(setAddRemoveFavorite(functionAddRemoveFavorite(arr, el, aboutuser)));
						}}
						className={el.favorite ? 'like' : 'nolike'}>
						{wishlist}
					</div>
					<button onClick={() => navigate(`${el.parent}/${el.id}`)}>
						<img src={el.image} alt="No image" />
					</button>
				</div>
				<div className="card__info">
					<h3 onClick={() => navigate(`${el.parent}/${el.id}`)}>{el.name}</h3>
					<p>{el.subcategory}</p>
					<h4>${el.price}</h4>
				</div>
				<div className="card__hide">
					<button
						onClick={() => {
							dispatch(setAddBusket(functionAddBusket(arr, el, aboutuser)));
						}}>
						Добавить в корзину
					</button>
				</div>
			</div>
		</div>
	);
};
