import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./Header.css";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setHome, setStrAlk, setLowAlk, setNonAlk } from "../../store/coctails/coctailsActions";

const Header = ({callBack, popupDisplay}) => {

  const [dateUpdate, setDateUpdate] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const dispatch = useDispatch();

  const toggleDate = () => {
    callBack(dateUpdate);
    setDateUpdate(!dateUpdate);
    dispatch(setHome)
    //ctx.setIsCardOpen(false)
  }

  const resetCardHandler = () => {
    //ctx.setIsCardOpen(false)
  }

  const handlePopupDisplay = () => {
    //ctx.setPopupSwitch(!ctx.popupSwitch);
  }

  const coctails = useSelector(store => store.coctails)
  

  return (
    <div className="header">
      <div className="header__nav">
        <Link className="header__nav_a" to="/" onClick={toggleDate}>
          Домой
        </Link>
        <Link className="header__nav_a" to="/strong-alcohol" onClick={() => ( dispatch(setStrAlk))}>
          Крепкие
        </Link>
        <Link className="header__nav_a" to="/low-alcohol" onClick={() => ( dispatch(setLowAlk))}>
          Слабоалкогольные
        </Link>
        <Link className="header__nav_a" to="/non-alcoholic" onClick={() => ( dispatch(setNonAlk))}>
          Безалкогольные
        </Link>
      </div>
      <div className="header__container">
        <form className="header__form">
          <input className="header__input"></input>
          <button className="header__button">Find</button>
        </form>
        <div className="header__entry">
          <img className="header__entry_img"></img>
          {!isLoggedIn && <button className="header__button" onClick={handlePopupDisplay}>Sign in</button>}
          {isLoggedIn && <button className="header__button" onClick={handlePopupDisplay}>Sign out</button>}
        </div>
      </div>
    </div>
  );
};

export default Header;
