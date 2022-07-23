import React from "react";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <nav>
      <a href="#top">
        <img src={logo} alt="logo" />
      </a>
      <ul>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#company">Company</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#login">Login</a>
        </li>
        <li>
          <a href="#register">Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
