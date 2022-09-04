import "./App.scss";
import { useState, useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";
import Button from "./components/Button";
import logoDatabiz from "./images/client-databiz.svg";
import logoAudiophile from "./images/client-audiophile.svg";
import logoMeet from "./images/client-meet.svg";
import logoMaker from "./images/client-maker.svg";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
  const size = useWindowSize();
  const [navToggle, setNavToggle] = useState(false);

  const navToggler = () => {
    setNavToggle((prev) => !prev);
  };

  useEffect(() => {
    navToggle
      ? document.body.classList.add("lock-scrollbar")
      : document.body.classList.remove("lock-scrollbar");
  });

  const isDesktop = size.width > 1000;

  return (
    <div className="App">
      <Header
        navToggle={navToggle}
        setNavToggle={navToggler}
        isDesktop={isDesktop}
      />
      <main className="container__flex">
        <div className="container__flex__text hero__text">
          <h1>Make{isDesktop ? <br /> : " "}remote work</h1>
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
        <div className="container__flex__img">
          <Image isDesktop={isDesktop}></Image>
        </div>
      </main>
      {navToggle ? <div className="nav__toggle__overlay"></div> : ""}
    </div>
  );
}

export default App;
