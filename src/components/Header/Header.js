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
    </div>
  );
};

export default Header;
