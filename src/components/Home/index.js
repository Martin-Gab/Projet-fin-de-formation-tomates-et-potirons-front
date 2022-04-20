// Home Component

// Local Imports
import './home.scss';
import heroBannerMobile from 'src/assets/images/hero-banner-mobile.png';
import heroBannerDesktop from 'src/assets/images/hero-banner.png';

// Packages Imports
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

// Actions Imports
import { closeBurgerMenu, closeSubMenu } from 'src/actions/menu';

// Data content Imports
import { homepageAmap, homepageCards } from 'src/data/content';

const Home = () => {
  const dispatch = useDispatch();

  const isDesktop = useMediaQuery({ query: '(min-width: 800px)' });

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
          <img src={isDesktop ? heroBannerDesktop : heroBannerMobile} alt="illustration des activités de tomates et potirons" className="hero__banner" />
        </section>

        <section className="amap">
          <img src={homepageAmap.img} alt="panier de l'amap" className="amap__picture" />
          <div className="amap-content">
            <h1 className="amap__title">{homepageAmap.title}</h1>
            <p className="amap__description">
              {homepageAmap.description}
            </p>
            <NavLink className="global-cta" to="/nos-activites/amap">{homepageAmap.cta}</NavLink>
          </div>
        </section>

        <section className="cards">

          {homepageCards.map((card) => (
            <div className="card-container">
              <div className="card">
                <div className="card__front">
                  <h1 className="card__front-title">{card.title}</h1>
                  <img src={card.img} alt={`Lien vers page ${card.title}`} className="card__front-image" />
                </div>
                <div className="card__back">
                  <p className="card__back-description">
                    {card.description}
                  </p>
                  <NavLink className="global-cta" to="/nos-activites/vente-direct">{card.cta}</NavLink>
                </div>
              </div>
            </div>
          ))}

        </section>

      </div>
    </main>
  );
};

export default Home;
