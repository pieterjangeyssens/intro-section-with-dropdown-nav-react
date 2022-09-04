import Nav from "./Nav";
import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconCloseMenu from "../images/icon-close-menu.svg";

const Header = (props) => {
  return (
    <header>
      <a href="#top">
        <img src={logo} alt="logo" />
      </a>
      <button className="menu__icon" onClick={props.setNavToggle}>
        <img src={props.navToggle ? iconCloseMenu : iconMenu} alt="Menu icon" />
      </button>
      <Nav navToggle={props.navToggle} isDesktop={props.isDesktop} />
    </header>
  );
};

export default Header;
