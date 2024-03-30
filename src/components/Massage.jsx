
const Massage = (el) => {

  return (
    <div className="massage">
      <div className="person">
        <h2>{el.PersonName}</h2>
        <h3>{el.PersonMail}</h3>
      </div>
      <div className="chat">
        <p>
          {el.PersMassage}
        </p>
      </div>
    </div>
  );
};

export default Massage;