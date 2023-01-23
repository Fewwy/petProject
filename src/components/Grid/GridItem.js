import { useState, useContext } from 'react';
import './Grid.css';
import { useDispatch } from 'react-redux';
import { cardToggle } from '../../store/cardIsOpen/cardIsOpenActions';
import { Link } from 'react-router-dom';

const GridItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inlineId, setInlineId] = useState();
  //const [targetCard, setTargetCard] = useState(null)
  //const [isCardOpen, setIsCardOpen] = useState(false)

  //const coctails = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleToggle = (evt) => {
    dispatch(cardToggle(evt.currentTarget.id));
  };

  return (
    <Link key={props.name} to={`/${props.class}/${props.name}`}>
      <button className="grid__container" id={props.id} onClick={handleToggle}>
        <img
          src={props.img}
          className="grid__img"
          style={{ backgroundImage: `url(${props.img})` }}
        ></img>
        <h3 className="grid__header">{props.name}</h3>
      </button>
    </Link>
  );
};

export default GridItem;
