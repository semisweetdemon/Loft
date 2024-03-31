import { useState } from 'react';
import AddProduct from '../components/AddProduct';
import Massage from '../components/Massage';

const Admin = () => {
	const [off, setOff] = useState(false);
	return (
		<section id="admin">
			<div className="container">
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
					<div className="to__do">
						{' '}
						<div
							className="add__product"
							style={{
								display: !off ? 'block' : '',
							}}>
							<AddProduct />
						</div>
						<div
							className="massages"
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
