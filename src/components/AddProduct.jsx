import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/Slices/productSlice';
import { useTranslation } from 'react-i18next';

const AddProduct = () => {
	const { arr } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const {t} = useTranslation()
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
    <div className="product">
      <h1>{t('product')}</h1>
			<select name="parent" onChange={(e) => changeAboutProduct(e)} value={aboutProduct.parent}>
				{arr.map((el) => (
					<option value={el.path}>{t(el.categoryIconName)}</option>
				))}
			</select>
			<div className="product__block block">
				<div className="block__add">
        <input onChange={(e) => changeAboutProduct(e)} type="url" name="image" placeholder={t('productImage')} value={aboutProduct.image} />
        <input onChange={(e) => changeAboutProduct(e)} type="text" name="name" placeholder={t('productName')} value={aboutProduct.name} />
        <input onChange={(e) => changeAboutProduct(e)} type="text" name="color" placeholder={t('productColor')} value={aboutProduct.color} />
        <input onChange={(e) => changeAboutProduct(e)} type="number" name="price" placeholder={t('productPrice')} value={aboutProduct.price} />
        <input onChange={(e) => changeAboutProduct(e)} type="text" name="sale" placeholder={t('productSale')} value={aboutProduct.sale} />
        <input onChange={(e) => changeAboutProduct(e)} type="text" name="subcategory" placeholder={t('productSubcategory')} value={aboutProduct.subcategory} />
        <textarea onChange={(e) => changeAboutProduct(e)} name="description" placeholder={t('productDescription')} value={aboutProduct.description} />
				</div>

				<div className="block__add">
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="size" placeholder={t('size')} value={aboutProduct.size} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="sleepingPlace" placeholder={t('sleepArea')} value={aboutProduct.sleepingPlace} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="seat" placeholder={t('seat')} value={aboutProduct.seat} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="skeleton" placeholder={t('frame')} value={aboutProduct.skeleton} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="mechanism" placeholder={t('mehanizm')} value={aboutProduct.mechanism} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="theMaterialOfTheLegs" placeholder={t('legM')} value={aboutProduct.theMaterialOfTheLegs} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="fillingPillows" placeholder={t('pillow')} value={aboutProduct.fillingPillows} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="linenDrawer" placeholder={t('linen')} value={aboutProduct.linenDrawer} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="usbCharger" placeholder={t('charge')} value={aboutProduct.usbCharger} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="removableCover" placeholder={t('cover')} value={aboutProduct.removableCover} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="decorativePillows" placeholder={t('decpillow')} value={aboutProduct.decorativePillows} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="delivery" placeholder={t('aboutDeliver')} value={aboutProduct.delivery} />
				<input onChange={(e) => changeAboutProduct(e)} type="text" name="manufacturer" placeholder={t('manufacture')} value={aboutProduct.manufacturer} />
				</div>
			</div>
        <button onClick={createProduct}>{t('createProduct')}</button>
    </div>

	);
};

export default AddProduct;
