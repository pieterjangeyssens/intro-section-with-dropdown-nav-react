import { React, useState } from "react";
import iconArrowUp from "../images/icon-arrow-up.svg";
import iconArrowDown from "../images/icon-arrow-down.svg";

const NavFold = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="nav__fold__parent"
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <div className="nav__item">
        <a className="nav__item__link" href={props.desc}>
          {props.desc}
        </a>
        <img src={isOpen ? iconArrowUp : iconArrowDown} alt="Arrow" />
      </div>
      <ul
        className={
          isOpen ? "nav__list--nested nav__fold--active" : "nav__list--nested"
        }
      >
        {props.content.children.map((child) => (
          <li key={child.name} className="nav__item">
            {child.icon && (
              <img
                className="nav__nested__img"
                src={child.icon}
                alt={child.name}
              />
            )}
            <a className="nav__item__link" href={child.name}>
              {child.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavFold;
