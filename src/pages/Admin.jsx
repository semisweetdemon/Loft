import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/Slices/productSlice';

const Admin = () => {
	const { arr } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const [aboutProduct, setAboutProduct] = React.useState({
		parent: '/kitchen',
		image: '',
		name: '',
		path: '',
		color: '',
		price: '',
		sale: '',
		subcategory: '',
		description: '',
		count: 1,
		favorite: false,
		busket: false,
		id: Date.now(),
	});

	const changeAboutProduct = (event) => {
		setAboutProduct({ ...aboutProduct, [event.target.name]: event.target.value, path: event.target.name === 'name' ? '/' + event.target.value.toLowerCase().trim().replaceAll(' ', '') : aboutProduct.path });
	};

	const createProduct = () => {
		let newProduct = arr.find((el) => el.path === aboutProduct.parent);
		let newArr = [...newProduct.categoryProducts, aboutProduct];
		axios.patch(`http://localhost:3000/products/${newProduct.id}`, { ...newProduct, categoryProducts: newArr });
		setAboutProduct({
			parent: '/kitchen',
			image: '',
			name: '',
			path: '',
			color: '',
			price: '',
			sale: '',
			subcategory: '',
			description: '',
			count: 1,
			favorite: false,
			busket: false,
			id: Date.now(),
		});
		dispatch(fetchProduct());
	};

	return (
		<section id="admin">
			<div className="container">
				<div className="admin">
					<h1>Admin</h1>
					<div className="admin__add">
						<select name="parent" onChange={(e) => changeAboutProduct(e)} value={aboutProduct.parent}>
							{arr.map((el) => (
								<option value={el.path}>{el.categoryName}</option>
							))}
						</select>
						<input onChange={(e) => changeAboutProduct(e)} type="url" name="image" placeholder="Картинка продукта" value={aboutProduct.image} />
						<input onChange={(e) => changeAboutProduct(e)} type="text" name="name" placeholder="Имя продукта" value={aboutProduct.name} />
						<input onChange={(e) => changeAboutProduct(e)} type="text" name="color" placeholder="Цвет продукта" value={aboutProduct.color} />
						<input onChange={(e) => changeAboutProduct(e)} type="number" name="price" placeholder="Цена продукта" value={aboutProduct.price} />
						<input onChange={(e) => changeAboutProduct(e)} type="text" name="sale" placeholder="Скидка продукта" value={aboutProduct.sale} />
						<input onChange={(e) => changeAboutProduct(e)} type="text" name="subcategory" placeholder="Подкатегория продукта" value={aboutProduct.subcategory} />
						<textarea onChange={(e) => changeAboutProduct(e)} name="description" placeholder="Описание продукта" value={aboutProduct.description} />
						<button onClick={createProduct}>Create product</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Admin;
