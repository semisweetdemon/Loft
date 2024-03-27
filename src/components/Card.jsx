import React from 'react';
import { useDispatch } from 'react-redux';
import { wishlist } from '../components';
import { setAddRemoveFavorite, setAddBusket } from '../redux/Slices/productSlice';
import { useNavigate } from 'react-router-dom';

export const Card = ({ el }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div className="card">
			<div className="card__hover">
				<div className="card__image">
					<div onClick={() => dispatch(setAddRemoveFavorite(el))} className={el.favorite ? 'like' : 'nolike'}>
						{wishlist}
					</div>
					<button onClick={() => navigate(`${el.parent}${el.path}`)}>
						<img src={el.image} alt="No image" />
					</button>
				</div>
				<div className="card__info">
					<h3 onClick={() => navigate(`${el.parent}${el.path}`)}>{el.name}</h3>
					<p>{el.subcategory}</p>
					<h4>{el.price}</h4>
				</div>
				<div className="card__hide">
					<button onClick={() => dispatch(setAddBusket(el))}>Добавить в корзину</button>
				</div>
			</div>
		</div>
	);
};
