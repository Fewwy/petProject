import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="wrap">
        <div className="card__wrapper">
          <h2 className="card__title">{props.name}</h2>
          <div className="card__descr-wrapper">
            <h3 className="card__descr-wrapper_ingridient">Ингридиенты :</h3>
            {props.ing.map((item) => {
              return <p className="card__ing">{item}</p>;
            })}
          </div>
        </div>
        <img className="card__img" src={props.src}></img>
      </div>

      <p className="card__description">{props.desc}</p>
    </div>
  );
};

export default Card;
