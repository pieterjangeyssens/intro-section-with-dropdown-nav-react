import React from "react";
import heroImageDesktop from "../images/image-hero-desktop.png";
import heroImageMobile from "../images/image-hero-mobile.png";

const Image = (props) => {
  return (
    <img
      className="hero__image"
      src={props.isDesktop ? heroImageDesktop : heroImageMobile}
      alt="Hero"
    />
  );
};

export default Image;
