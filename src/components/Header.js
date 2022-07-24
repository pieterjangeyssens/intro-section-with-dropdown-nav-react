import React from "react";
import Nav from "./Nav";
import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";

const Header = () => {
  return (
    <header>
      <a href="#top">
        <img src={logo} alt="logo" />
      </a>
      <button className="menu__icon">
        <img src={iconMenu} alt="Menu icon" />
      </button>
      <Nav></Nav>
    </header>
  );
};

export default Header;
