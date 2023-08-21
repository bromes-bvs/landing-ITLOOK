import React from 'react';

const Header = () => {
  return (
    <header className="page-header">
      <nav className="main-nav">
        <a className="logo link logo--main-nav" href="./index.html">
          Funiro.
        </a>
        <ul className="list main-nav__list">
          <li className="main-nav__item main-nav__item--current">
            <a href="/">Products</a>
          </li>
          <li className="main-nav__item">
            <a href="/">Rooms</a>
          </li>
          <li className="main-nav__item">
            <a href="/">Inspirations</a>
          </li>
        </ul>
      </nav>
      <input type="text" className="serch" />
      <div className="profile">
        <button type="button" className="profile__like"></button>
        <a href="/" className="profile__cart">
          Cart
        </a>
        <a href="/" className="profile__cart">
          Photo
        </a>
      </div>
    </header>
  );
};

export default Header;
