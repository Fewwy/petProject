import './Grid.css';

const GridItem = (props) => {

  return (
    <button className="grid__container">
      <div
        className="grid__img"
        style={{backgroundImage: `url(${props.img})`}}
      ></div>
      <h3 className="grid__header">{props.name}</h3>
    </button>
  );
};

export default GridItem;
