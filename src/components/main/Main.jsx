import React, { useRef, useState } from 'react';

import heroImg from '../../assets/images/Rectangle 1.png';
import heroImgSecond from '../../assets/images/achitecture-wallpaper.jpg';
import detailImg1 from '../../assets/images/Rectangle 2.png';
import detailImg2 from '../../assets/images/Rectangle 3.png';
import aboutImg3 from '../../assets/images/Rectangle 4.png';
import numberOne from '../../assets/images/number_1.png';
import numberTwo from '../../assets/images/number_2.png';
import projectImg1 from '../../assets/images/image 1.png';
import projectImg2 from '../../assets/images/image 2.png';
import projectImg3 from '../../assets/images/image 3.png';
import projectImg4 from '../../assets/images/image 4.png';
import contsctImg from '../../assets/images/ContactUs.png';

// import { ReactComponent as ArrowLeft } from '../../assets/logo/arrow-2-left-long.svg';
// import { ReactComponent as ArrowRight } from '../../assets/logo/arrow-2-right-long.svg';
// import { ReactComponent as Line } from '../../assets/logo/Line 3.svg';

const Main = () => {
  // const [index, setIndex] = useState('01');
  // const first = useRef();
  // const second = useRef();

  // const toggleImage = i => {
  //   setIndex(i);

  //   first.current.classList.toggle('translate');
  //   second.current.classList.toggle('translate');
  // };

  return (
    <main>
      <section className="hero section">
        <div className="hero__titel-wrapper">
          <h1 data-speed="1.2" className="hero__title">
            High-Quality Furniture Just For You
          </h1>
          <p className="hero__prescription">
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </p>
          <button type="button">Shop Now</button>
        </div>
        <div data-speed="0.9" className="hero__slider-wrapper">
          <img ref={first} className="hero__img" src={heroImg} alt="Build" />
          <img
            ref={second}
            className="hero__img"
            src={heroImgSecond}
            alt="Build"
          />
          <div className="slider__prescription">
            <h4 className="prescription__h">Bohauss</h4>
            <p className="prescription__p">Luxury big sofa 2-seat</p>
            <p className="prescription__cost"></p>
            <a href="/" className="prescription__more">
              Arrow
            </a>
          </div>
          <div className="hero__slider__state-wrapper">
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <button type="button"></button>
              <button type="button"></button>
            </div>
          </div>
        </div>
      </section>
      <section className="details section">
        <div className="details__card">
          <div className="details__info-wrp">
            <h4 className="details__card__h">High Quality</h4>
            <p className="details__card__p">crafted from top materials</p>
          </div>
        </div>
        <div className="details__card">
          <div className="details__info-wrp">
            <h4 className="details__card__h">Warrany Protectionh</h4>
            <p className="details__card__p">Over 2 yearsh</p>
          </div>
        </div>
        <div className="details__card">
          <div className="details__info-wrp">
            <h4 className="details__card__h">Free Shipping</h4>
            <p className="details__card__p">Order over 150 $</p>
          </div>
        </div>
        <div className="details__card">
          <div className="details__info-wrp">
            <h4 className="details__card__h">24 / 7 Support</h4>
            <p className="details__card__p">Dedicated support</p>
          </div>
        </div>
      </section>
      <section className="products section">
        <h2 className="products__title">Our Products</h2>
        <div className="products__list-wrapper">
          <ul className="products__list">
            <li className="products__list__item">
              <img src={src} alt={description} className="poructs__list__img" />
              <div className="products__list__item-wrp">
                <h4 className="prescription__h">Bohauss</h4>
                <p className="prescription__p">Luxury big sofa 2-seat</p>
                <p className="prescription__cost"></p>
              </div>
            </li>
          </ul>
          <button type="button" className="products__more-btn"></button>
        </div>
      </section>
      <section className="projects section">
        <h2 className="projects__title">Наши проекты</h2>
        <div className="projects__img-wrapper">
          <div>
            <div className="projects__name-wrapper scroll-left">
              <h3 className="projects__secondary-title">ДОСУГОВЫЙ ЦЕНТР</h3>
              <button>
                ПОДРОБНЕЕ
                <ArrowRight />
              </button>
            </div>
            <img
              className="projects__img scroll-right"
              src={projectImg1}
              alt="Leisure center"
            />
          </div>
          <div>
            <img
              className="projects__img scroll-left"
              src={projectImg2}
              alt="Leisure center"
            />
            <img
              className="projects__img scroll-center"
              src={projectImg3}
              alt="Leisure center"
            />
            <img
              className="projects__img scroll-right"
              src={projectImg4}
              alt="Leisure center"
            />
          </div>
        </div>
        <button type="button">
          ВСЕ ПРОЕКТЫ <ArrowRight />
        </button>
      </section>
      <section className="contactUs section">
        <h2 className="contactUs__title">Связаться с нами</h2>
        <div className="contactUs__content-wrapper">
          <form className="contactUs__form">
            <input type="text" className="contactUs__input" placeholder="Имя" />
            <label className="contactUs__placeinput">
              <input type="number" required className="contactUs__input" />
              <div className="contactUs__input-placeholder">
                Номер телефона<span>*</span>
              </div>
            </label>
            <label className="contactUs__placeinput">
              <input type="text" required className="contactUs__input" />
              <div className="contactUs__input-placeholder">
                E-mail<span>*</span>
              </div>
            </label>

            <input
              type="text"
              className="contactUs__input"
              placeholder="Интересующий товар/услуга"
            />
            <label className="contactUs__placeinput">
              <textarea
                className="contactUs__input"
                cols="30"
                rows="6"
                required
              ></textarea>
              <div className="contactUs__input-placeholder">
                Сообщение<span>*</span>
              </div>
            </label>
            <label htmlFor="policy" className="contactUs__checkbox-label view">
              <input
                className="contactUs__checkbox"
                type="checkbox"
                name="policy"
                id="policy"
              />
              <span className="contactUs__custom-checkbox"></span>
              Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
            </label>
            <button type="submit">
              ОТПРАВИТЬ <ArrowRight />
            </button>
          </form>
          <img
            data-speed="1.2"
            className="contactUs__img"
            src={contsctImg}
            alt="Men call"
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
