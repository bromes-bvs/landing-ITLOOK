import React from 'react';

import { ReactComponent as Place } from '../../assets/logo/Place.svg';
import { ReactComponent as Phone } from '../../assets/logo/Phone.svg';
import { ReactComponent as Facebook } from '../../assets/logo/Facebook.svg';
import { ReactComponent as Instagram } from '../../assets/logo/Instagram.svg';
import { ReactComponent as Twitter } from '../../assets/logo/Twitter-X.svg';
import { ReactComponent as Send } from '../../assets/logo/Send.svg';

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__content-wrapper">
          <div className="footer__logo-wrapper">
            <a href="/" className="footer__logo">
              Funiro.
            </a>
            <ul className="footer__information__list">
              <li className="footer__information__item">
                Worldwide furniture store since 2020. We sell over 1000+ branded
                products on our website
              </li>
              <li className="footer__information__item">
                <Place />
                Sawojajar Malang, Indonesia
              </li>
              <li className="footer__information__item">
                <Phone />
                +6289 456 3455
              </li>
              <li className="footer__information__item">
                <a className="footer__information__link" href="/">
                  www.funiro.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu">
            <h4 className="footer__menu__title title">Menu</h4>
            <nav className="footer__menu-nav">
              <ul className="footer__menu__list">
                <li className="footer__menu__item">
                  <a className="footer__menu__link" href="/">
                    Products
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a className="footer__menu__link" href="/">
                    Rooms
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a className="footer__menu__link" href="/">
                    Inspirations
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a className="footer__menu__link" href="/">
                    About Us
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a className="footer__menu__link" href="/">
                    Terms & Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__account">
            <h4 className="footer__account__title title">Account</h4>
            <nav className="footer__account-nav">
              <ul className="footer__account__list">
                <li className="footer__account__item">
                  <a className="footer__account__link" href="/">
                    My Account
                  </a>
                </li>
                <li className="footer__account__item">
                  <a className="footer__account__link" href="/">
                    Checkout
                  </a>
                </li>
                <li className="footer__account__item">
                  <a className="footer__account__link" href="/">
                    My Cart
                  </a>
                </li>
                <li className="footer__account__item">
                  <a className="footer__account__link" href="/">
                    My catalog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__social">
            <h4 className="footer__social__title title">Stay Connected</h4>
            <ul className="footer__social__list">
              <li className="footer__social__item">
                <a
                  className="footer__social__link"
                  href="https://www.facebook.com/"
                >
                  <Facebook className="social__logo" /> Facebook
                </a>
              </li>
              <li className="footer__social__item">
                <a
                  className="footer__social__link"
                  href="https://instagram.com/"
                >
                  <Instagram className="social__logo" /> Instagram
                </a>
              </li>

              <li className="footer__social__item">
                <a
                  className="footer__social__link"
                  href="https://www.pinterest.com/"
                >
                  <Twitter className="social__logo" /> Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__subscribe">
            <h4 className="footer__subscribe__title title">Stay Updated</h4>
            <div>
              <input
                className="footer__subscribe__input"
                type="email"
                placeholder="Enter your email"
              />
              <button className="footer__subscribe__btn" type="submit">
                <Send />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
