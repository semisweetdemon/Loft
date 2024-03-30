import React from 'react';
import AddProduct from '../components/AddProduct';
import Massage from '../components/Massage';

const Admin = () => {
	return (
		<section id="admin">
			<div className="container">
				<div className="admin">
					<div className="zakladki">
						<button>Add Product</button>
						<button>Massage</button>
					</div>
					<div className="to__do">
						<AddProduct />
						<Massage />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Admin;
