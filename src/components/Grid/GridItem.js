import { useState } from 'react';
import './Grid.css';

const GridItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inlineId, setInlineId] = useState();
  const handleToggle = (evt) => {
    setIsOpen(!isOpen);
    setInlineId(evt.target.id);
  }
  return (
    <button className="grid__container" id={props.id} onClick={handleToggle}>
      <div
        className="grid__img"
        style={{backgroundImage: `url(${props.img})`}}
      ></div>
      <h3 className="grid__header">{props.name}</h3>
    </button>
  );
};

export default GridItem;
