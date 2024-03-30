import { Link, useNavigate } from "react-router-dom";
import {call, mail, instagram} from '../components'
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const navigate = useNavigate()
  const [personMassage, setPersonMassage] = useState({
    PersonName: '',
    PersonMail: '',
    PersMassage: '',
    id:Date.now(),
  })

  const changeMassage = (e) => {
    // console.log(e)
    setPersonMassage({
      ...personMassage, [e.target.name]: e.target.value
    })
  }

  async function createMassage (newMassage) {
    await axios.post('http://localhost:3000/massage', newMassage)
  }

  function holderCreateMassage () {
    createMassage(personMassage)
    setPersonMassage({
      PersonName: '',
      PersonMail: '',
      PersMassage: '',
      id:Date.now(),
    })
  }
 
  return (
    <section id="contact">
      <div className="container">
      <div className="path">
            <h4 onClick={() => navigate('/')}>Главная</h4>
            <h4>/</h4>
            <h4>Контакты</h4>
          </div>
          <h1>
            Свяжитесь с нами
          </h1>
        <div className="contact">
          <div className="contact__form">
            <div className="e-mail__name">
              <div className="name">
                <h4>Ваше имя</h4>
                <input onChange={changeMassage} type="text" name="PersonName" value={personMassage.PersonName}
                />
              </div>
              <div className="name">
                <h4>Ваш e-mail</h4>
                <input onChange={changeMassage} type="text" 
                name="PersonMail"
                value={personMassage.PersonMail}
                />
              </div>
            </div>
            <div className="massage">
              <h4>Сообщение</h4>
              <textarea onChange={changeMassage}
              name="PersMassage"
              value={personMassage.PersMassage}
              />
            </div>
            <div className="contact__btn">
              <button>Прикрепить файл</button>
              <button onClick={holderCreateMassage}>Отправить</button>
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
            <h3>
              Адрес: г. Бишкек, Шопокова, 89 2-этаж 
            </h3>
          </div>
          
        </div>
        <div className="contact__map">
            <h1>Адрес нашей компании</h1>
            <map name=""></map>
          </div>
      </div>
    </section>
  );
};

export default Contact;