import axios from "axios";
import { useEffect, useState } from "react";

const Massage = () => {
  const [massage, setMassage] = useState([])
  async function readMassage() {
    let {data} = await axios('http://localhost:3000/massage')
    setMassage(data)
  }
  useEffect(() => {
    readMassage()
  }, [])
  function randomColor() {
    let color = '#'
    for(let i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10)
    }
    return color 
  }
  return (
    <div className="massage">
      {
        massage.map((el, idx) => (
          <div className="user" key={idx}>
            <div className="avatar" style={{
              background: randomColor()
            }}>
              <h1>{el.PersonName.slice(0, 1)}</h1>
            </div>
            <div className="person">
              <h2>Имя: {el.PersonName}</h2>
              <h3>E-maill: {el.PersonMail}</h3>
            </div>
            <div className="line"></div>
            <div className="chat">
              <h5>Cooбщение:</h5>
              <p>
                {el.PersMassage}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Massage;