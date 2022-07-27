import "./App.scss";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import logoDatabiz from "./images/client-databiz.svg";
import logoAudiophile from "./images/client-audiophile.svg";
import logoMeet from "./images/client-meet.svg";
import logoMaker from "./images/client-maker.svg";
import heroImageDesktop from "./images/image-hero-desktop.png";
import heroImageMobile from "./images/image-hero-mobile.png";
import Header from "./components/Header";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navToggler = () => {
    setNavToggle((prev) => !prev);
  };

  useEffect(() => {
    navToggle
      ? document.body.classList.add("lock-scrollbar")
      : document.body.classList.remove("lock-scrollbar");
  });

  const [isDesktop, setDesktop] = useState(window.innerWidth > 375);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 375);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="App">
      <Header navToggle={navToggle} setNavToggle={navToggler} />
      <main className="container__flex--col">
        <div className="container__flex--col hero__text">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <Button></Button>
          <aside className="container__flex--row">
            <img src={logoDatabiz} alt="Logo Databiz" />
            <img
              className="logo-audiophile"
              src={logoAudiophile}
              alt="Logo Audiophile"
            />
            <img src={logoMeet} alt="Logo Meet" />
            <img src={logoMaker} alt="Logo Maker" />
          </aside>
        </div>
        <img
          className="hero__image"
          src={isDesktop ? heroImageDesktop : heroImageMobile}
          alt="Hero"
        />
      </main>
      {navToggle ? <div className="nav__toggle__overlay"></div> : ""}
    </div>
  );
}

export default App;
