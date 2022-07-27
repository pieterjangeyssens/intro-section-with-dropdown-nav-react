import { React, useState } from "react";
import iconArrowUp from "../images/icon-arrow-up.svg";
import iconArrowDown from "../images/icon-arrow-down.svg";

const NavFold = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="nav__item" onClick={() => setIsOpen((isOpen) => !isOpen)}>
      <a className="nav__item__link" href="#features">
        {props.desc}
      </a>
      <img src={isOpen ? iconArrowUp : iconArrowDown} alt="Arrow" />
    </li>
  );
};

export default NavFold;
