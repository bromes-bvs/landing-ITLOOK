import React, { useRef } from 'react';

import { ReactComponent as Search } from '../../assets/logo/Search.svg';
import { ReactComponent as ArrowBottom } from '../../assets/logo/ArrowBottom.svg';
import { ReactComponent as Like } from '../../assets/logo/Heart.svg';
import { ReactComponent as Cart } from '../../assets/logo/Cart.svg';

import profileImg from '../../assets/images/profile.png';

const Header = () => {
  const productsRef = useRef();
  const roomsRef = useRef();

  const handleDrop = ref => {
    ref.current.classList.toggle('drop-active');
  };

  return (
    <header className="header">
      <div className="container">
        <div>
          <nav className="main-nav">
            <a className="main-nav__logo" href="./index.html">
              Funiro.
            </a>
            <ul className="main-nav__list">
              <li
                ref={productsRef}
                className="main-nav__item"
                onClick={() => handleDrop(productsRef)}
              >
                Products <ArrowBottom />
                <ul className="dropdown__list">
                  <li className="dropdown__item">Sofas</li>
                  <li className="dropdown__item">Сouches</li>
                  <li className="dropdown__item">Beds</li>
                  <li className="dropdown__item">Сhairs</li>
                  <li className="dropdown__item">Other furniture</li>
                </ul>
              </li>
              <li
                className="main-nav__item"
                ref={roomsRef}
                onClick={() => handleDrop(roomsRef)}
              >
                Rooms <ArrowBottom />
                <ul className="dropdown__list">
                  <li className="dropdown__item">Living room</li>
                  <li className="dropdown__item">Bedroom</li>
                  <li className="dropdown__item">Kitchen</li>
                  <li className="dropdown__item">Bathroom</li>
                </ul>
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
