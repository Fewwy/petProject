import { BrowserRouter, Route, Routes } from "react-router-dom";
import header from "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__nav">
        <a className="header__nav_a" href="/">
          Home
        </a>
        <a className="header__nav_a" href="/strong-alcohol">
          Strong alcohol
        </a>
        <a className="header__nav_a" href="/low-alcohol">
          Low alcohol
        </a>
        <a className="header__nav_a" href="/non-alcoholic">
          Non alcoholic
        </a>
      </div>
      <div className="header__container">
        <form className="header__form">
          <input className="header__input"></input>
          <button className="header__button">Find</button>
        </form>
        <div className="header__entry">
          <img className="header__entry_img"></img>
          <button className="header__button">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
