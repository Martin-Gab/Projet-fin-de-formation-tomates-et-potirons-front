// Component for Vente Direct page

// Local Imports
import './vente-direct.scss';

// Actions Imports
import { closeBurgerMenu, closeSubMenu } from 'src/actions/menu';

// Packages Imports
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Data Content Import
import { contentVenteDirect } from 'src/data/content';

// Sub Component Import
import VenteDirectMap from './venteDirectMap';

const VenteDirect = () => {
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
      <div className="vente-direct-wrapper">

        <VenteDirectMap />

        <div className="vente-direct-content">
          <h1 className="vente-direct-content__title">{contentVenteDirect.title}</h1>
          <p className="vente-direct-content__description">
            {contentVenteDirect.description}
          </p>
          <div className="vente-direct-highlight">
            <p className="vente-direct-content__location">
              {contentVenteDirect.location.title} <br />
              {contentVenteDirect.location.road} <br />
              {contentVenteDirect.location.zipAndCity}
            </p>
            <p className="vente-direct-content__hours">
              {contentVenteDirect.hours.first} <br />
              {contentVenteDirect.hours.second} <br />
              {contentVenteDirect.hours.third}
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default VenteDirect;
