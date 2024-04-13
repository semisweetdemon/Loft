import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {
	const { t } = useTranslation();
	return (
		<div id="footer">
			<div className="container">
				<div className="footer">
					<div className="footer__left">
						<h5>{t('navigate')}</h5>
						<div className="footer__links">
							<div>
								<Link to="/kitchen">{t('kitchen')}</Link>
								<Link to="/bedroom">{t('bedroom')}</Link>
								<Link to="/hall">{t('hall')}</Link>
							</div>
							<div>
								<Link to="/hallways">{t('hallways')}</Link>
								<Link to="/office">{t('office')}</Link>
								<Link to="/children">{t('children')}</Link>
							</div>
							<div>
								<Link to="/cupboard">{t('cupboard')}</Link>
								<Link to="/kitchen">{t('mattress')}</Link>
								<Link to="/furniture">{t('furniture')}</Link>
							</div>
						</div>
						<div className="footer__link">
							<Link>{t('sale')}</Link>
							<Link>{t('new')}</Link>
						</div>
					</div>
					<div className="footer__right">
						<h2>LM</h2>
						<p className="footer__text">{t('adress')}</p>
						<div className="footer__links">
							<a>8 (964) 89 99 119</a>
							<a>INSTAGRAM</a>
							<a>mebel_loft_anapa@mail.ru</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
