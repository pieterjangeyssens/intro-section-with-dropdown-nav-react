import { React, useState } from "react";

const NavButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  return (
    <>
      <li className="nav__btn" onClick={handleClicked}>
        <a
          className={`nav__btn--${props.name.toLowerCase()}`}
          href={`#${props.name}`}
        >
          {props.name}
        </a>
      </li>
    </>
  );
};

export default NavButton;
