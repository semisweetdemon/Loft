import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { remove } from '../components';
import { useTranslation } from 'react-i18next';
const Massage = () => {
	const [massage, setMassage] = useState([]);
	const { t } = useTranslation();
	async function readMassage() {
		let { data } = await axios('http://localhost:3000/massage');
		setMassage(data);
	}
	useEffect(() => {
		readMassage();
	}, []);
	function randomColor() {
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += Math.floor(Math.random() * 10);
		}
		return color;
	}

	async function deletMassage(id) {
		await axios.delete(`${'http://localhost:3000/massage'}/${id}`);
		readMassage();
	}
	return (
		<div className="massage">
			{massage.map((el, idx) => (
				<div className="users" key={idx}>
					<div className="user">
						<div
							className="avatar"
							style={{
								background: randomColor(),
							}}>
							<h1>{el.PersonName.slice(0, 1)}</h1>
						</div>
						<div className="person">
							<h2>
								{t('name')}: {el.PersonName.length > 15 ? el.PersonName.slice(0, 15) + '...' : el.PersonName}
							</h2>
							<h3>
								E-maill: <Link>{el.PersonMail.length > 15 ? el.PersonMail.slice(0, 15) + '...' : el.PersonMail}</Link>{' '}
							</h3>
						</div>
					</div>
					<div className="line"></div>
					<div className="chat__btn">
						<div className="chat">
							<h5>{t('message')}:</h5>
							<p>{el.PersMassage}</p>
						</div>
						<div className="btns">
							<button
								onClick={() => {
									deletMassage(el.id);
								}}>
								{remove}
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Massage;
