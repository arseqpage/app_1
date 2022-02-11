import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.svg";
import ButtonNav from "../../ui/Buttons/ButtonNav/ButtonNav";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <img className="header__logo" src={Logo} alt="Logo" />

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="/">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="/about">
                  About us
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="/">
                  Sermon
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="/">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header__right">
          <ButtonNav text="Contact us" />
        </div>
      </div>
    </header>
  );
};

export default Header;
