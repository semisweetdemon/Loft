// import React from 'react';
import { useTranslation } from 'react-i18next';
import { bestPrice, bestDrive, bestTime, bestOrder, supplyIcon1, supplyBox, supplyService, supplyUpdate, vector } from '../components';

const About = () => {
	const { t } = useTranslation();
	return (
		<section id="about">
			<div className="container">
				<div className="about">
					<div className="about__shop">
						<div className="img__bg"></div>
						<div className="block__text">
							<div className="line"></div>
							<div className="block__info">
								<p>{t('aboutMagazine')}</p>
								<h2>{t('second')}</h2>
								<p>
									{t('third')} <br />
								</p>
								<p>{t('fourth')}</p>
							</div>
						</div>
						<div className="block__img">
							<img src="/src/assets/images/about_bg.png" alt="" />
						</div>
					</div>

					<div className="buy__profitably">
						<h2>{t('five')}</h2>
						<div className="info__icon">
							<div className="block__icon">
								{bestPrice}
								<div className="icon__text">
									<h3>{t('six')}</h3>
									<p>{t('seven')}</p>
								</div>
							</div>
							<div className="block__icon">
								{bestDrive}
								<div className="icon__text">
									<h3>{t('eight')}</h3>
									<p>{t('nine')}</p>
								</div>
							</div>
							<div className="block__icon">
								{bestTime}
								<div className="icon__text">
									<h3>{t('ten')}</h3>
									<p>{t('eleven')}</p>
								</div>
							</div>
							<div className="block__icon">
								{bestOrder}
								<div className="icon__text">
									<h3>{t('twelve')}</h3>
									<p>{t('thirteen')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="recomeds__info">
				<div className="container">
					<div className="recomeds__block">
						<div className="block__info">
							<h2>{t('fourteen')}</h2>
							<div className="line"></div>
							<p>
								{t('fiveteen')} <br />
								{t('sixteen')}
							</p>
						</div>
						<div className="block__info">
							<h2>{t('seventeen')}</h2>
							<div className="line"></div>
							<p>{t('eighteen')}</p>
						</div>
						<div className="block__info">
							<h2>{t('nineteen')}</h2>
							<div className="line"></div>
							<p>{t('twenty')}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="supply">
				<div className="container">
					<div className="supply__group">
						<div className="supply__block">
							<div className="supply__icon">{supplyIcon1}</div>
							<div className="supply__info">
								<h2>{t('twentyOne')}</h2>
								<p>{t('twentyTwo')}</p>
							</div>
						</div>
						<div className="supply__block">
							<div className="supply__icon">{supplyBox}</div>
							<div className="supply__info">
								<h2>{t('twentyThee')}</h2>
								<p>{t('twentyFour')}</p>
							</div>
						</div>
						<div className="supply__block">
							<div className="supply__icon">{supplyService}</div>
							<div className="supply__info">
								<h2>{t('twentyFive')}</h2>
								<p>{t('twentySix')}</p>
							</div>
						</div>
						<div className="supply__block">
							<div className="supply__icon">{supplyUpdate}</div>
							<div className="supply__info">
								<h2>{t('twentySeven')}</h2>
								<p>{t('twentyEight')}</p>
							</div>
						</div>
					</div>

					<div className="help">
						<h2>{t('twentyNine')}</h2>
						<div className="help__info">
							<div className="help__block">
								<div className="vector__icon">{vector}</div>
								<div className="text">
									<p>
										<strong>{t('thirty')}</strong> <br />
										{t('thirtyOne')}
									</p>
								</div>
							</div>
							<div className="help__block">
								<div className="vector__icon">{vector}</div>
								<div className="text">
									<p>
										<strong>{t('thirtyTwo')}</strong> <br />
										{t('thirtyThree')}
									</p>
								</div>
							</div>
							<div className="help__block">
								<div className="vector__icon">{vector}</div>
								<div className="text">
									<p>
										<strong>{t('thirtyFour')}</strong> <br />
										{t('thirtyFive')}
									</p>
								</div>
							</div>
						</div>

						<div className="titr">
							<h1>
								{t('thirtySix')} <br /> {t('thirtySeven')}
							</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
