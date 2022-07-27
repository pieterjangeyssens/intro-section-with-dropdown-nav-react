import React, { useState } from "react";

const Button = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive ? (
        <button
          onClick={() => setIsActive(!isActive)}
          className="hero__btn hero__btn--active"
        >
          Learn more
        </button>
      ) : (
        <button onClick={() => setIsActive(!isActive)} className="hero__btn">
          Learn more
        </button>
      )}
    </>
  );
};

export default Button;
