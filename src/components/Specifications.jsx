import React from "react";
"react-router-dom";

const Specifications = () => {

	const [product, setProduct] = React.useState([]);
	return (
    <div className="specifications">
      {
        product.map((el, idx) => (
          <div className="block" key={idx}>
            <div className="specification_1">
              <h3>Размер</h3>
              <h3>{}</h3>
              <h3>Спальное место</h3>
              <h3></h3>
              <h3>Посадочное место</h3>
              <h3></h3>
              <h3>Каркас</h3>
              <h3></h3>
              <h3>Механизм</h3>
              <h3></h3>
              <h3>Материал ножек</h3>
              <h3></h3>
              <h3>Наполнение подушек</h3>
              <h3></h3>
            </div>
            <div className="specification_1">
              <h3>Бельевой ящик</h3>
              <h3></h3>
              <h3>Зарядное устройство USB</h3>
              <h3></h3>
              <h3>Съемный чехол</h3>
              <h3></h3>
              <h3>Декоративные подушки</h3>
              <h3></h3>
              <h3>Вариант доставки</h3>
              <h3></h3>
              <h3>Производитель</h3>
              <h3></h3>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Specifications;