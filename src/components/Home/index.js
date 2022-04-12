// Home Component

// Local Imports
import './home.scss';
import heroBannerMobile from 'src/assets/images/hero-banner-mobile.png';
import amapImage from 'src/assets/images/taxi-98.gif';
import saleImage from 'src/assets/images/taxi-no-connection.gif';
import partnerImage from 'src/assets/images/taxi-cooking.png';

// Packages Imports
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Actions Imports
import { closeBurgerMenu, closeSubMenu } from 'src/actions/menu';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      window.scrollTo(0, 0);
      dispatch(closeBurgerMenu());
      dispatch(closeSubMenu());
    },
    [],
  );

  return (
    <main>
      <div className="homepage">

        <section className="hero">
          <h1 className="hero__title">Vos maraîchers cultivent pour vous.</h1>
          <img src={heroBannerMobile} alt="illustration des activités de tomates et potirons" className="hero__banner" />
        </section>

        <section className="amap">
          <img src={amapImage} alt="panier de l'amap" className="amap__picture" />
          <h1 className="amap__title">Notre Amap</h1>
          <p className="amap__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam saepe ad quasi placeat quam sit,
            suscipit minus facere doloremque voluptatum tempore animi.
            Debitis ad nemo obcaecati ut repellendus id voluptatem!
          </p>
          <NavLink className="global-cta" to="/nos-activites/amap">En savoir plus</NavLink>
        </section>

        <section className="cards">

          <div className="card-container">
            <div className="card">
              <div className="card__front">
                <h1 className="card__front-title">Vente Direct</h1>
                <img src={saleImage} alt="illustration animée" className="card__front-image" />
              </div>
              <div className="card__back">
                <p className="card__back-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quos sapiente dolorem.
                </p>
                <NavLink className="global-cta" to="/nos-activites/vente-direct">En savoir plus</NavLink>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card__front">
                <h1 className="card__front-title">Nos partenaires</h1>
                <img src={partnerImage} alt="illustration nos partenaires" className="card__front-image" />
              </div>
              <div className="card__back">
                <p className="card__back-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quos sapiente dolorem.
                </p>
                <NavLink className="global-cta" to="/nos-activites/nos-partenaires">En savoir plus</NavLink>
              </div>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
};

export default Home;
