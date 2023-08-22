import React from 'react';

import { ReactComponent as Share } from '../../assets/logo/Share.svg';
import { ReactComponent as Like } from '../../assets/logo/Heart.svg';

export const Item = ({ img, title, desc, oldP, newP, discount, newItem }) => {
  return (
    <li className="list__item">
      <img src={img} alt={title} className="list__item__img" />
      <div className="list__item-wrapper">
        <h4 className="list__item__h">{title}</h4>
        <p className="list__item__p">{desc}</p>
        <p className="list__item__cost">{newP === '' ? oldP : newP}</p>
      </div>
      <span
        className={`list__item__discount ${
          discount === ''
            ? newItem
              ? 'list__item__discount--green'
              : 'list__item__discount--hidden'
            : 'list__item__discount--red'
        }`}
      >
        {discount === '' ? newItem && 'New' : discount}
      </span>
      <div className="item__overlay">
        <button type="button" className="item__overlay__btn btn-view">
          Add to cart
        </button>
        <div>
          <a href="/" className="item__overlay__link">
            <Share /> Share
          </a>
          <a href="/" className="item__overlay__link">
            <Like /> Like
          </a>
        </div>
      </div>
    </li>
  );
};
