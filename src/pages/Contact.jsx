import { Link, useNavigate } from 'react-router-dom';
import { call, mail, instagram } from '../components';
import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [personMassage, setPersonMassage] = useState({
		PersonName: '',
		PersonMail: '',
		PersMassage: '',
		id: Date.now(),
	});

	const changeMassage = (e) => {
		setPersonMassage({
			...personMassage,
			[e.target.name]: e.target.value,
		});
	};

	async function createMassage(newMassage) {
		await axios.post('http://localhost:3000/massage', newMassage);
	}

	function holderCreateMassage() {
		createMassage({ ...personMassage, id: String(personMassage.id) });
		setPersonMassage({
			PersonName: '',
			PersonMail: '',
			PersMassage: '',
			id: Date.now(),
		});
	}

	return (
		<section id="contact">
			<div className="container">
				<div className="path">
					<h4 onClick={() => navigate('/')}>{t('home')}</h4>
					<h4>/</h4>
					<h4>{t('contact')}</h4>
				</div>
				<h1>{t('withUs')}</h1>
				<div className="contact">
					<div className="contact__form">
						<div className="e-mail__name">
							<div className="name">
								<h4>{t('yourName')}</h4>
								<input onChange={changeMassage} type="text" name="PersonName" value={personMassage.PersonName} />
							</div>
							<div className="name">
								<h4>{t('yourEmail')}</h4>
								<input onChange={changeMassage} type="text" name="PersonMail" value={personMassage.PersonMail} />
							</div>
						</div>
						<div className="massage">
							<h4>{t('message')}</h4>
							<textarea onChange={changeMassage} name="PersMassage" value={personMassage.PersMassage} />
						</div>
						<div className="contact__btn">
							<button>{t('file')}</button>
							<button onClick={holderCreateMassage}>{t('send')}</button>
						</div>
					</div>
					<div className="contact__adres">
						<div className="contact__icon">
							<div className="icon">
								{call}
								<Link>8 (964) 89 99 119</Link>
							</div>
							<div className="icon">
								{mail}
								<Link>mebel_loft_anapa@mail.ru</Link>
							</div>
							<div className="icon">
								{instagram}
								<Link>INSTAGRAM</Link>
							</div>
						</div>
						<h3>{t('adressBishkek')}</h3>
					</div>
				</div>
				<div className="contact__map">
					<h1>{t('ourAdress')}</h1>
					<map name=""></map>
				</div>
			</div>
		</section>
	);
};

export default Contact;
