import React from 'react';

import { ReactComponent as Search } from '../../assets/logo/Search.svg';
import { ReactComponent as ArrowBottom } from '../../assets/logo/ArrowBottom.svg';
import { ReactComponent as Like } from '../../assets/logo/Heart.svg';
import { ReactComponent as Cart } from '../../assets/logo/Cart.svg';

import profileImg from '../../assets/images/profile.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div>
          <nav className="main-nav">
            <a className="main-nav__logo" href="./index.html">
              Funiro.
            </a>
            <ul className="main-nav__list">
              <li className="main-nav__item">
                Products <ArrowBottom />
              </li>
              <li className="main-nav__item">
                Rooms <ArrowBottom />
              </li>
              <li className="main-nav__item">
                <a href="/">Inspirations</a>
              </li>
            </ul>
          </nav>
          <div className="search-wrapper">
            <input
              type="text"
              className="search"
              placeholder="Search for minimalist chair"
            />
            <Search className="search__icon" />
          </div>
        </div>
        <div className="profile">
          <button type="button" className="profile__like">
            <Like />
          </button>
          <a href="/" className="profile__cart">
            <Cart />
          </a>
          <a href="/" className="profile__cart">
            <img src={profileImg} alt="Profile" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
