import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo_primary.svg";
import { ReactComponent as Facebook } from "../../assets/Facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/Linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/Twitter.svg";
import ButtonMain from "../../ui/Buttons/ButtonMain/ButtonMain";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <img className="footer__logo" src={Logo} alt="Footer Logo" />
        <p>&copy; Copyright finsweet 2022</p>
        <p>
          (480) 555-0103
          <br />
          4517 Washington Ave.
          <br />
          <a href="#">sample@example.com</a>
        </p>
      </div>

      <div className="footer__links">
        <ul className="quicklinks">
          <li className="quicklinks__item">
            <a className="quicklinks__link" href="/">
              About us
            </a>
          </li>

          <li className="quicklinks__item">
            <a className="quicklinks__link" href="/">
              Sermons
            </a>
          </li>

          <li className="quicklinks__item">
            <a className="quicklinks__link" href="/">
              Events
            </a>
          </li>

          <li className="quicklinks__item">
            <a className="quicklinks__link" href="/">
              Blog
            </a>
          </li>
        </ul>

        <div className="connect">
          <ul className="connect__list">
            <li className="connect__item">
              <a className="connect__link" href="#" target="_blank">
                <Facebook />
              </a>
            </li>

            <li className="connect__item">
              <Linkedin />
              <a className="connect__link" href="#" target="_blank"></a>
            </li>

            <li className="connect__item">
              <Twitter />
              <a className="connect__link" href="#" target="_blank"></a>
            </li>
          </ul>
        </div>
      </div>

      <form className="footer__form subscribe">
        <h3 className="subscribe__title">
          Subscribe to get Latest Updates and News
        </h3>

        <div className="form__actions">
          <input className="subscribe__input" type="email" />
          <ButtonMain />
        </div>
      </form>
    </footer>
  );
};

export default Footer;
