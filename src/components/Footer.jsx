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
								<Link>{t('kitchen')}</Link>
								<Link>{t('bedroom')}</Link>
								<Link>{t('hall')}</Link>
							</div>
							<div>
								<Link>{t('hallways')}</Link>
								<Link>{t('office')}</Link>
								<Link>{t('children')}</Link>
							</div>
							<div>
								<Link>{t('cupboard')}</Link>
								<Link>{t('mattress')}</Link>
								<Link>{t('furniture')}</Link>
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
