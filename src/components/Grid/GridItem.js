import CoctailDescription from "../CoctailDescription/CoctailDescription";

const GridItem = (props) => {


  const handleTransferData = (event) => {
    
  }

  return (
    <button className="grid__container" onClick={handleTransferData}>
      <div
        className="grid__img"
        style={{backgroundImage: `url(${props.img})`}}
      ></div>
      <h3 className="grid__header">{props.name}</h3>
    </button>
  );
};

export default GridItem;
