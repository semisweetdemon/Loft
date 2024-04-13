import { useState } from 'react';
import AddProduct from '../components/AddProduct';
import Massage from '../components/Massage';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Admin = () => {
	const [off, setOff] = useState(false);
	const navigate = useNavigate()
	const { t } = useTranslation()
	return (
		<section id="admin">
			<div className="container">
				<div className="path">
					<h4 onClick={() => {navigate('/')}}>{t('home')}</h4>
					<h4>/</h4>
					<h4>{t('cabinet')}</h4>
				</div>
				<div className="admin">
					<div className="zakladki">
						<button
							onClick={() => {
								setOff(false);
								console.log(off);
							}}>
							{t('addProduct')}
						</button>
						<button
							onClick={() => {
								setOff(true);
								console.log(off);
							}}>
							{t('message')}
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
