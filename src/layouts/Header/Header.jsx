import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/gif/Logo.gif"
import { useState } from "react";

const Header = () => {
  
  const [handlerNav, setHandlerNav] = useState(false);
  
  return (
    <>
      <header className="header">
        <div className="container header__container">
          {/* Nav Desktop */}
          <nav className="header__nav-desktop">
            <NavLink className={"header__item-desktop"} to="/home">
              Home
            </NavLink>
            <NavLink className={"header__item-desktop"} to="/catalog">
              Catalog
            </NavLink>
            <NavLink className={"header__item-desktop"} to="/blog">
              Blog
            </NavLink>
          </nav>

          {/* Nav Reponsive */}
          <nav className={`header__nav-responsive ${handlerNav ? "isActive" : ""}`}>
            <button className="header__button-close" onClick={() => setHandlerNav(false)}>
              <i className="bi bi-x-lg header__button-icon"></i>
            </button>
            <NavLink className={"header__item-responsive"} to="/home">
              Home
            </NavLink>
            <NavLink className={"header__item-responsive"} to="/catalog">
              Catalog
            </NavLink>
            <NavLink className={"header__item-responsive"} to="/blog">
              Blog
            </NavLink>
          </nav>

          {/* Buttton Open */}
          <div className="header__button-open">
            <button className="header__button-btn" onClick={() => setHandlerNav(true)}>
              <i className="bi bi-list header__button-icon"></i>
            </button>
          </div>

          {/* Logo */}
          <Link className="header__logo" to="/">
            <img className="header__logo-img" src={Logo} alt="Logo" />
          </Link>

          {/* Social Media */}
          <ul className="header__network">
            <li>
              <a className="header__network-link" href="#" target="_blank">
                <i className="bi bi-facebook header__network-icon"></i>
              </a>
            </li>
            <li>
              <a className="header__network-link" href="#" target="_blank">
                <i className="bi bi-instagram header__network-icon"></i>
              </a>
            </li>
            <li>
              <a className="header__network-link" href="#" target="_blank">
                <i className="bi bi-tiktok header__network-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
