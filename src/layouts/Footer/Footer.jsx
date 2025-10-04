import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import Logo from "../../assets/gif/Logo.gif";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__information">
            <Link className="footer__logo" to="/home">
              <img className="footer__logo-img" src={Logo} alt="Logo" />
            </Link>
            <p className="footer__text">The best platform to discover the best anime.</p>
          </div>

          <nav className="footer__nav">
            <ul className="footer__menu">
              <li>
                <NavLink className={"footer__link"} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={"footer__link"} to="/catalog">
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink className={"footer__link"} to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>

            <ul className="footer__network">
              <li>
                <a className="footer__network-link" href="#" target="_blank">
                  <i className="bi bi-facebook footer__network-icon"></i>
                </a>
              </li>
              <li>
                <a className="footer__network-link" href="#" target="_blank">
                  <i className="bi bi-instagram footer__network-icon"></i>
                </a>
              </li>
              <li>
                <a className="footer__network-link" href="#" target="_blank">
                  <i className="bi bi-tiktok footer__network-icon"></i>
                </a>
              </li>
              <li>
                <a className="footer__network-link" href="#" target="_blank">
                  <i className="bi bi-discord footer__network-icon"></i>
                </a>
              </li>
              <li>
                <a className="footer__network-link" href="#" target="_blank">
                  <i className="bi bi-twitter-x footer__network-icon"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
