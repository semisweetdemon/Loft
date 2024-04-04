import { useState } from 'react';
import AddProduct from '../components/AddProduct';
import Massage from '../components/Massage';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
	const [off, setOff] = useState(false);
	const navigate = useNavigate()
	return (
		<section id="admin">
			<div className="container">
				<div className="path">
					<h4 onClick={() => {navigate('/')}}>Главная</h4>
					<h4>/</h4>
					<h4>Личный кабинет</h4>
				</div>
				<div className="admin">
					<div className="zakladki">
						<button
							onClick={() => {
								setOff(false);
								console.log(off);
							}}>
							Add Product
						</button>
						<button
							onClick={() => {
								setOff(true);
								console.log(off);
							}}>
							Massage
						</button>
					</div>
					<div className="line__big"></div>
					<div className="to__do">
						{' '}
						<div className="add__product"
							style={{
								display: !off ? 'block' : '',
							}}>
							<AddProduct />
						</div>
						<div className="massages"
							style={{
								display: !off ? '' : 'block',
							}}>
							<Massage />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Admin;
