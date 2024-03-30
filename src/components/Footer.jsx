import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<div id="footer">
			<div className="container">
				<div className="footer">
					<div className="footer__left">
						<h5>НАВИГАЦИЯ</h5>
						<div className="footer__links">
							<div>
								<Link>Кухни</Link>
								<Link>Спальни</Link>
								<Link>Гостинные</Link>
							</div>
							<div>
								<Link>Прихожие</Link>
								<Link>Офисная мебель</Link>
								<Link>Детская</Link>
							</div>
							<div>
								<Link>Шкафы</Link>
								<Link>Матрасы</Link>
								<Link>Мягкая мебель</Link>
							</div>
						</div>
						<div className="footer__link">
							<Link>Акция</Link>
							<Link>Новинки</Link>
						</div>
					</div>
					<div className="footer__right">
						<h2>LM</h2>
						<p className="footer__text">г. Анапа, Анапское шоссе, 30 Ж/К Черное море</p>
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
