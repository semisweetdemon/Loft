import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/Slices/productSlice';

const AddProduct = () => {
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
		size: '',
		sleepingPlace: '',
		seat: '',
		skeleton: '',
		mechanism: '',
		theMaterialOfTheLegs: '',
		fillingPillows: '',
		linenDrawer: '',
		usbCharger: '',
		removableCover: '',
		decorativePillows: '',
		delivery: '',
		manufacturer: '',
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
			size: '',
			sleepingPlace: '',
			seat: '',
			skeleton: '',
			mechanism: '',
			theMaterialOfTheLegs: '',
			fillingPillows: '',
			linenDrawer: '',
			usbCharger: '',
			removableCover: '',
			decorativePillows: '',
			delivery: '',
			manufacturer: '',
			count: 1,
			favorite: false,
			busket: false,
			id: Date.now(),
		});
		dispatch(fetchProduct());
	};

	return (
    <div className="Product">
      <h1>Product</h1>
			<select name="parent" onChange={(e) => changeAboutProduct(e)} value={aboutProduct.parent}>
				{arr.map((el) => (
					<option value={el.path}>{el.categoryName}</option>
				))}
			</select>
			<div className="Product__block">
				<div className="Product__block__add">
        <input onChange={(e) => changeAboutProduct(e)} type="url" name="image" placeholder="Картинка продукта" value={aboutProduct.image} />
        <input onChange={(e) => changeAboutProduct(e)} type="text" name="name" placeholder="Имя продукта" value={aboutProduct.name} />
        <input onChange={(e) => changeAboutProduct(e)} type="text" name="color" placeholder="Цвет продукта" value={aboutProduct.color} />
        <input onChange={(e) => changeAboutProduct(e)} type="number" name="price" placeholder="Цена продукта" value={aboutProduct.price} />
        <input onChange={(e) => changeAboutProduct(e)} type="text" name="sale" placeholder="Скидка продукта" value={aboutProduct.sale} />
        <input onChange={(e) => changeAboutProduct(e)} type="text" name="subcategory" placeholder="Подкатегория продукта" value={aboutProduct.subcategory} />
        <textarea onChange={(e) => changeAboutProduct(e)} name="description" placeholder="Описание продукта" value={aboutProduct.description} />
				</div>

				<div className="Product__block__add">
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="size" placeholder="Размер" value={aboutProduct.size} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="sleepingPlace" placeholder="Спальное место" value={aboutProduct.sleepingPlace} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="seat" placeholder="Посадочное место" value={aboutProduct.seat} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="skeleton" placeholder="Каркас" value={aboutProduct.skeleton} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="mechanism" placeholder="Механизм" value={aboutProduct.mechanism} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="theMaterialOfTheLegs" placeholder="Материал ножек" value={aboutProduct.theMaterialOfTheLegs} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="fillingPillows" placeholder="Наполнение подушек" value={aboutProduct.fillingPillows} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="linenDrawer" placeholder="Бельевой ящик" value={aboutProduct.linenDrawer} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="usbCharger" placeholder="Зарядное устройство USB" value={aboutProduct.usbCharger} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="removableCover" placeholder="Съемный чехол" value={aboutProduct.removableCover} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="decorativePillows" placeholder="Декоративные подушки" value={aboutProduct.decorativePillows} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="delivery" placeholder="Вариант доставки" value={aboutProduct.delivery} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="manufacturer" placeholder="Производитель" value={aboutProduct.manufacturer} />
				</div>
			</div>
        <button onClick={createProduct}>Create product</button>
    </div>

	);
};

export default AddProduct;
