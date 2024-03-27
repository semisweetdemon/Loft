// import React from 'react';
import { bestPrice, bestDrive, bestTime, bestOrder, supplyIcon1, supplyBox, supplyService, supplyUpdate, vector } from '../components';

const About = () => {
	return (
		<section id="about">
			<div className="container">
				<div className="about">
					<div className="about__shop">
						<div className="img__bg"></div>
						<div className="block__text">
							<div className="line"></div>
							<div className="block__info">
								<p>О магазине</p>
								<h2>Интернет-магазин «Лофт Мебель»: купите хорошую мебель в один клик!</h2>
								<p>
									Уникальный формат интернет-магазина позволит вам купить лучшую мебель крупнейших российских фабрик максимально быстро и по выгодной цене! <br />
								</p>
								<p>Мы благодарим за доверие более десятка производителей, которые дали нам возможность представлять лучшие образцы их продукции российском интернет-пространстве. Прямые договоры на поставку мебели с фабрик обеспечивают наиболее привлекательные условия для наших покупателей.</p>
							</div>
						</div>
						<div className="block__img">
							<img src="/src/assets/images/about_bg.png" alt="" />
						</div>
					</div>

					<div className="buy__profitably">
						<h2>Покупайте с выгодой!</h2>
						<div className="info__icon">
							<div className="block__icon">
								{bestPrice}
								<div className="icon__text">
									<h3>Лучшая цена</h3>
									<p>Предлагаем близкие к оптовым цены, которые дают возможность приобретать мебель дешевле, чем в розничных салонах и шоу-румах.</p>
								</div>
							</div>
							<div className="block__icon">
								{bestDrive}
								<div className="icon__text">
									<h3>Прямые поставки</h3>
									<p>С ведущих мебельных фабрик уменьшают срок выполнения вашего заказа, даже если речь идет об изготовлении предметов по индивидуальному проекту.</p>
								</div>
							</div>
							<div className="block__icon">
								{bestTime}
								<div className="icon__text">
									<h3>Экономие времени</h3>
									<p>Не нашли оптимальный вариант или нет времени на поиски? Оставьте онлайн-заявку с критериями, и мы предложим вам несколько достойных образцов.</p>
								</div>
							</div>
							<div className="block__icon">
								{bestOrder}
								<div className="icon__text">
									<h3>Изготовление на заказ</h3>
									<p>Принимаем заявки на изготовление мебели по персональному дизайн-проекту от покупателей из любой точки России. Просим быть готовыми к авансированной оплате персональных заказов.</p>
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
							<h2>Самые «вкусные» предложения</h2>
							<div className="line"></div>
							<p>
								Мы делаем всё необходимое, чтобы покупатели получали доступ к актуальным новинкам, которые представляет российский мебельный рынок. <br />
								Познакомиться с каждой моделью, сравнить цены на аналоги и выбрать лучшее вы можете прямо сейчас. Хотите первыми узнавать о самых выгодных предложениях? Тогда подписывайтесь на информационную рассылку!
							</p>
						</div>
						<div className="block__info">
							<h2>Гарантированное качество</h2>
							<div className="line"></div>
							<p>Вся продукция сопровождается гарантией производителя. В каталогах представлена только сертифицированная мебель. Собственный контроль качества тщательно проверяет каждый образец перед отправкой заказчику. Покупатели получают необходимые документы – гарантийный талон и чек.</p>
						</div>
						<div className="block__info">
							<h2>Впечатляющий ассортимент</h2>
							<div className="line"></div>
							<p>Ежедневно мы выбираем для наших каталогов идеальные образцы из товарной матрицы производителей по всей России. Модные расцветки, экологически безопасные материалы, надежные комплектующие – у нас вы найдете мебель своей мечты!</p>
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
								<h2>Особенные условия для оптовиков</h2>
								<p>Число наших оптовых покупателей неуклонно возрастает и всё потому, что мы сумели предложить владельцам мебельных магазинов наиболее выгодные условия.</p>
							</div>
						</div>
						<div className="supply__block">
							<div className="supply__icon">{supplyBox}</div>
							<div className="supply__info">
								<h2>Оперативная доставка</h2>
								<p>Собственная курьерская служба быстро привезет купленную мебель по указанному адресу. В российские регионы доставка осуществляется силами транспортных компаний.</p>
							</div>
						</div>
						<div className="supply__block">
							<div className="supply__icon">{supplyService}</div>
							<div className="supply__info">
								<h2>Внимательный сервис</h2>
								<p>Квалифицированные менеджеры интернет-магазина ответят на все вопросы по ассортименту и предоставляемым возможностям, а также помогут оформить заказ и проконтролируют реализацию клиентских пожеланий при заказе мебели.</p>
							</div>
						</div>
						<div className="supply__block">
							<div className="supply__icon">{supplyUpdate}</div>
							<div className="supply__info">
								<h2>Каждый пятый покупатель заказывает у наc повторно!</h2>
								<p>И мы благодарим всех, кто воспользовался нашим уникальным предложением, заказал мебель быстро и недорого и порекомендовал друзьям и знакомым.</p>
							</div>
						</div>
					</div>

					<div className="help">
						<h2>Мы поможем сэкономить время, силы и деньги!</h2>
						<div className="help__info">
							<div className="help__block">
								<div className="vector__icon">{vector}</div>
								<div className="text">
									<p>
										<strong>Время.</strong> <br />
										Примем вашу заявку в кротчайшие сроки. При необходимости подберем для вас достойные варианты по заданным критериям.
									</p>
								</div>
							</div>
							<div className="help__block">
								<div className="vector__icon">{vector}</div>
								<div className="text">
									<p>
										<strong>Силы.</strong> <br />
										Закупим оптом или закажем на фабрике, избавив от длительных обсуждений заказа с исполнителем. Курируем все этапы работы над заказом.
									</p>
								</div>
							</div>
							<div className="help__block">
								<div className="vector__icon">{vector}</div>
								<div className="text">
									<p>
										<strong>Деньги.</strong> <br />
										Вы точно купите мебель дешевле, чем в розницу.
									</p>
								</div>
							</div>
						</div>

						<div className="titr">
							<h1>
								На чем мы не экономим? <br /> На вашем комфорте и качестве ебели!
							</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
