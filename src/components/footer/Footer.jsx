import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content-wrapper">
        <div className="footer__logo-wrapper">
          <a href="/" className="footer__logo">
            SMTH
          </a>
        </div>
        <div className="footer__information">
          <h4 className="footer__information__title">Информация</h4>
          <ul className="footer__information__list">
            <li className="footer__information__item">
              <a className="footer__information__link" href="/">
                Главная
              </a>
            </li>
            <li className="footer__information__item">
              <a className="footer__information__link" href="/">
                Галерея
              </a>
            </li>
            <li className="footer__information__item">
              <a className="footer__information__link" href="/">
                Проекты
              </a>
            </li>
            <li className="footer__information__item">
              <a className="footer__information__link" href="/">
                Сертификаты
              </a>
            </li>
            <li className="footer__information__item">
              <a className="footer__information__link" href="/">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <h4 className="footer__contacts__title">Контакты</h4>
          <ul className="footer__contacts__list">
            <li className="footer__contacts__item">
              {/* <Place /> */}
              100000, Республика Казахстан, <br /> г. Караганда, ул.
              Телевизионная 10
            </li>
            <li className="footer__contacts__item">
              {/* <Phone /> */}
              +38 (000) 000 00 00
            </li>
            <li className="footer__contacts__item">
              {/* <Mail /> */}
              mail@gmail.com
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <h4 className="footer__social__title">Социальные сети</h4>
          <ul className="footer__social__list">
            <li className="footer__social__item">
              <a
                className="footer__social__link"
                href="https://www.facebook.com/"
              >
                {/* <Facebook /> */}
              </a>
            </li>
            <li className="footer__social__item">
              <a className="footer__social__link" href="https://twitter.com/">
                {/* <Twitter /> */}
              </a>
            </li>
            <li className="footer__social__item">
              <a
                className="footer__social__link"
                href="https://www.linkedin.com/"
              >
                {/* <LinkedIn /> */}
              </a>
            </li>
            <li className="footer__social__item">
              <a
                className="footer__social__link"
                href="https://www.pinterest.com/"
              >
                {/* <Pinterest /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="devider"></span>
      <div className="footer__policy">
        <p className="footer__policy__p">
          © 2019 Digital Project. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
