import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import header from "./Header.css";
import StrongAlcohol from "../StrongAlcohol/StrongAlcohol";
import Grid from "../Grid/Grid";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__nav">
        <Link className="header__nav_a" to="/">
          Home
        </Link>
        <Link className="header__nav_a" to="/strong-alcohol">
          Strong alcohol
        </Link>
        <Link className="header__nav_a" to="/low-alcohol">
          Low alcohol
        </Link>
        <Link className="header__nav_a" to="/non-alcoholic">
          Non alcoholic
        </Link>
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
