// Amap page Component

// Local Imports
import './amap.scss';
import amapImage from 'src/assets/images/taxi-98.gif';
import { openForm } from 'src/actions/membership';
import { closeBurgerMenu } from 'src/actions/menu';

// Packages Imports
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Amap = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      window.scrollTo(0, 0);
      dispatch(closeBurgerMenu());
    },
    [],
  );

  return (
    <main>
      <section className="amap-page">

        <img src={amapImage} alt="illustration de l'amap" className="amap-image" />

        <div className="amap-infos">
          <h1 className="amap-infos__title">Notre Amap</h1>
          <p className="amap-infos__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias ipsa eaque fugiat beatae quos consectetur quis, maxime saepe vitae.
          </p>
          <div
            className="amap-infos__cta"
            onClick={() => {
              dispatch(openForm());
            }}
          >
            Adhérer à l'AMAP
          </div>
          <div className="modal-wrapper">
            <div className="amap-infos__modal">Charte AMAP</div>
            <div className="amap-infos__modal">Réglement Intérieur</div>
            <div className="amap-infos__modal">Contrat AMAP</div>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Amap;
