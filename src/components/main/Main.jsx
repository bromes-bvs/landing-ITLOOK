import React from 'react';
import collection from '../../data/products.json';
import { Item } from '../Item/Item';

import topSliderImg1 from '../../assets/images/Images 1.png';
import topSliderImg2 from '../../assets/images/Images 2.png';
import topSliderImg3 from '../../assets/images/Images 3.png';
import inspireImg1 from '../../assets/images/Inspiration1.png';
import inspireImg2 from '../../assets/images/Inspiration2.png';
import inspireImg3 from '../../assets/images/Inspiration3.png';
import tipsImg1 from '../../assets/images/Tips1.png';
import tipsImg2 from '../../assets/images/Tips2.png';
import tipsImg3 from '../../assets/images/Tips3.png';

import { ReactComponent as ArrowLeftMore } from '../../assets/logo/ArrowRightBlack.svg';
import { ReactComponent as Trophy } from '../../assets/logo/Trophy.svg';
import { ReactComponent as Accept } from '../../assets/logo/Accept.svg';
import { ReactComponent as Shopping } from '../../assets/logo/Shopping.svg';
import { ReactComponent as Support } from '../../assets/logo/Support.svg';
import { ReactComponent as ArrowRight } from '../../assets/logo/Arrow.svg';
import { ReactComponent as ArrowLeft } from '../../assets/logo/ArrowLeftCircle.svg';
import { ReactComponent as Divider } from '../../assets/logo/Divider.svg';

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
      <section className="products container">
        <h2 className="products__title">Our Products</h2>
        <div className="products__list-wrapper">
          <ul className="products__list">
            {collection.map(
              ({
                id,
                img,
                title,
                description,
                newPrice,
                oldPrice,
                discount,
                newItem,
              }) => {
                return (
                  <Item
                    key={id}
                    img={img}
                    title={title}
                    desc={description}
                    oldP={oldPrice}
                    newP={newPrice}
                    discount={discount}
                    newItem={newItem}
                  />
                );
              }
            )}
          </ul>
          <button type="button" className="products__more-btn btn-view">
            Show More
          </button>
        </div>
      </section>
      <section className="inspiration container">
        <div className="inspiration__title-wrapper">
          <h2 className="inspiration__title">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="inspiration__description">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button type="button" className="inspiration__btn-more btn-view">
            Explore More
          </button>
        </div>
        <div className="inspiration__slider">
          <div>
            <img
              className="inspiration__img"
              src={inspireImg1}
              alt="Room view"
            />
            <img
              className="inspiration__img shrink"
              src={inspireImg2}
              alt="Room view"
            />
            <img
              className="inspiration__img shrink"
              src={inspireImg3}
              alt="Room view"
            />
            <div className="inspiration__dots radio">
              <span className="inspiration__dot current"></span>
              <span className="inspiration__dot"></span>
              <span className="inspiration__dot"></span>
              <span className="inspiration__dot"></span>
            </div>
          </div>
          <div className="inspiration__slider__btn-wrapper">
            <div>
              <p className="inspiration__slider__p">
                01 <Divider /> Bed Room
              </p>
              <h5 className="inspiration__slider__h">Inner Peace</h5>
              <button type="button" className="inspiration__slider__btn-more">
                <ArrowLeftMore />
              </button>
            </div>
          </div>
        </div>
        <button type="button" className="inspiration__slider__btn-next">
          <ArrowRight />
        </button>
      </section>
      <section className="tips container">
        <h2 className="tips__title">Tips & Tricks</h2>
        <div className="tips__content-wrapper">
          <div className="tips__card-wrapper">
            <img className="tips__card__img" src={tipsImg1} alt="Create" />
            <div className="tips__card-bottom-wrapper">
              <p className="tips__card__p">
                How to create a living room to love
              </p>
              <p className="tips__card__date">20 jan 2020</p>
            </div>
          </div>
          <div className="tips__card-wrapper active">
            <img className="tips__card__img" src={tipsImg2} alt="Solution" />
            <div className="tips__card-bottom-wrapper">
              <p className="tips__card__p">
                Solution for clean look working space
              </p>
              <p className="tips__card__date">10 jan 2020</p>
            </div>
          </div>
          <div className="tips__card-wrapper">
            <img
              className="tips__card__img"
              src={tipsImg3}
              alt="Cooking activity"
            />
            <div className="tips__card-bottom-wrapper">
              <p className="tips__card__p">
                Make your cooking activity more fun with good setup
              </p>
              <p className="tips__card__date">20 jan 2020</p>
            </div>
          </div>
          <div className="tips__card-wrapper">
            <img className="tips__card__img" src="" alt="" />
            <div className="tips__card-bottom-wrapper">
              <p className="tips__card__p">
                Make your cooking activity more fun with good setup
              </p>
              <p className="tips__card__date">20 jan 2020</p>
            </div>
          </div>
        </div>
        <div className="tips__dots radio">
          <span className="inspiration__dot"></span>
          <span className="inspiration__dot current"></span>
          <span className="inspiration__dot"></span>
          <span className="inspiration__dot"></span>
        </div>
        <button type="button" className="tips__slider__switch-btn left">
          <ArrowLeft />
        </button>
        <button type="button" className="tips__slider__switch-btn right">
          <ArrowRight />
        </button>
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
