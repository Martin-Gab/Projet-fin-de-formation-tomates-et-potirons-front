// Home Component

// Local Imports
import './home.scss';
import heroBannerMobile from 'src/assets/images/hero-banner-mobile.png';
import amapImage from 'src/assets/images/dummy-amap.jpg';

const Home = () => (
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
      <div className="amap__cta">En savoir plus</div>
    </section>

    <section className="cards">
      <div className="card-container">
        <div className="card">
          <div className="card__front">Front of the card</div>
          <div className="card__back">Back of the card</div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card__front">Front of the card</div>
          <div className="card__back">Back of the card</div>
        </div>
      </div>
    </section>

  </div>
);

export default Home;
