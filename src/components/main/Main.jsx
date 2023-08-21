import React from 'react';

import topSliderImg1 from '../../assets/images/Images 1.png';
import topSliderImg2 from '../../assets/images/Images 2.png';
import topSliderImg3 from '../../assets/images/Images 3.png';
// import detailImg1 from '../../assets/images/Rectangle 2.png';
// import detailImg2 from '../../assets/images/Rectangle 3.png';
// import aboutImg3 from '../../assets/images/Rectangle 4.png';
// import numberOne from '../../assets/images/number_1.png';
// import numberTwo from '../../assets/images/number_2.png';
// import projectImg1 from '../../assets/images/image 1.png';
// import projectImg2 from '../../assets/images/image 2.png';
// import projectImg3 from '../../assets/images/image 3.png';
// import projectImg4 from '../../assets/images/image 4.png';
// import contsctImg from '../../assets/images/ContactUs.png';

import { ReactComponent as ArrowLeftMore } from '../../assets/logo/ArrowRightBlack.svg';
import { ReactComponent as Trophy } from '../../assets/logo/Trophy.svg';
import { ReactComponent as Accept } from '../../assets/logo/Accept.svg';
import { ReactComponent as Shopping } from '../../assets/logo/Shopping.svg';
import { ReactComponent as Support } from '../../assets/logo/Support.svg';

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
      <section className="hero container">
        <div className="hero__title-wrapper ">
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
          <img
            className="hero__slider__img"
            src={topSliderImg2}
            alt="Furniture"
          />
          <img
            className="hero__slider__img"
            src={topSliderImg1}
            alt="Furniture"
          />
          <img
            className="hero__slider__img"
            src={topSliderImg3}
            alt="Furniture"
          />
          {/* <img className="hero__img" src="" alt="Build" /> */}

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
        <div className="slider__prescription">
          <div>
            <h4 className="slider__prescription__h">Bohauss</h4>
            <p className="slider__prescription__p">Luxury big sofa 2-seat</p>
            <p className="slider__prescription__cost">Rp 17.000.000</p>
          </div>
          <a href="/" className="slider__prescription__more">
            <ArrowLeftMore />
          </a>
        </div>
      </section>
      <section className="details container">
        <div className="details__card">
          <Trophy className="details__card__logo" />
          <div className="details__info-wrp">
            <h4 className="details__card__h">High Quality</h4>
            <p className="details__card__p">crafted from top materials</p>
          </div>
        </div>
        <div className="details__card">
          <Accept className="details__card__logo" />
          <div className="details__info-wrp">
            <h4 className="details__card__h">Warrany Protectionh</h4>
            <p className="details__card__p">Over 2 yearsh</p>
          </div>
        </div>
        <div className="details__card">
          <Shopping className="details__card__logo" />
          <div className="details__info-wrp">
            <h4 className="details__card__h">Free Shipping</h4>
            <p className="details__card__p">Order over 150 $</p>
          </div>
        </div>
        <div className="details__card">
          <Support className="details__card__logo" />
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
              <img src="" alt="" className="poructs__list__img" />
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
      <section className="inspiration section">
        <div>
          <h2 className="inspiration__title">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="inspiration__description">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button type="button" className="inspiration__btn-more">
            Explore More
          </button>
        </div>
        <div className="inspiration__slider-wrapper">
          <div>
            <img
              className="inspiration__img scroll-left"
              src=""
              alt="Leisure center"
            />
            <img
              className="inspiration__img scroll-center"
              src=""
              alt="Leisure center"
            />
            <img
              className="inspiration__img scroll-right"
              src=""
              alt="Leisure center"
            />
          </div>
        </div>
        <div className="inspiration__slider__btn-wrapper">
          <div>
            <p className="inspiration__slider__p">
              01 <span></span> Bed Room
            </p>
            <h5 className="inspiration__slider__h">Inner Peace</h5>
          </div>
          <button
            type="button"
            className="inspiration__slider__btn-next"
          ></button>
        </div>
      </section>
      <section className="tips section">
        <h2 className="tips__title">Tips & Tricks</h2>
        <div className="tips__content-wrapper">
          <div className="tips___card-wrapper">
            <img className="tips___card__img" src="" alt="" />
            <p className="tips__card_p">How to create a living room to love</p>
            <h5 className="tips__card__date">20 jan 2020</h5>
          </div>
          <div className="tips___card-wrapper">
            <img className="tips___card__img" src="" alt="" />
            <p className="tips__card_p">
              Solution for clean look working space
            </p>
            <h5 className="tips__card__date">10 jan 2020</h5>
          </div>
          <div className="tips___card-wrapper">
            <img className="tips___card__img" src="" alt="" />
            <p className="tips__card_p">
              Make your cooking activity more fun with good setup
            </p>
            <h5 className="tips__card__date">20 jan 2020</h5>
          </div>
          <div className="tips___card-wrapper">
            <img className="tips___card__img" src="" alt="" />
            <p className="tips__card_p">
              Make your cooking activity more fun with good setup
            </p>
            <h5 className="tips__card__date">20 jan 2020</h5>
          </div>
        </div>
        <button type="button" className="tips__slider__swith-btn"></button>
        <button type="button" className="tips__slider__swith-btn"></button>
      </section>
      <section className="share section">
        <div className="share__header-wrapper">
          <p className="share__description"></p>
          <h3 className="share__title">#FuniroFurniture</h3>
        </div>
        <div className="share__content-wrapper">
          <div className="content__left-wrp">
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className="content__right-wrp">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
