import React from 'react';
import { useTranslation } from 'react-i18next';
('react-router-dom');

const Specifications = ({ product }) => {
	const { t } = useTranslation();

	return (
		<div className="specifications">
			{
				<div className="block">
				<div className="block__one">
					<h3>{t('size')}</h3>
					<h3>{product.size}</h3>
					<h3>{t('sleepArea')}</h3>
					<h3>{product.sleepingPlace}</h3>
					<h3>{t('seat')}</h3>
					<h3>{product.seat}</h3>
					<h3>{t('frame')}</h3>
					<h3>{product.skeleton}</h3>
					<h3>{t('mehanizm')}</h3>
					<h3>{product.mechanism}</h3>
					<h3>{t('legM')}</h3>
					<h3>{product.theMaterialOfTheLegs}</h3>
					<h3>{t('pillow')}</h3>
					<h3>{product.fillingPillows}</h3>
				</div>
				<div className="block__one">
					<h3>{t('linen')}</h3>
					<h3>{product.linenDrawer}</h3>
					<h3>{t('charge')}</h3>
					<h3>{product.usbCharger}</h3>
					<h3>{t('cover')}</h3>
					<h3>{product.removableCover}</h3>
					<h3>{t('decpillow')}</h3>
					<h3>{product.decorativePillows}</h3>
					<h3>{t('aboutDeliver')}</h3>
					<h3>{product.delivery}</h3>
					<h3>{t('manufacture')}</h3>
					<h3>{product.manufacturer}</h3>
				</div>
			</div>
			}
		</div>
	);
};

export default Specifications;
