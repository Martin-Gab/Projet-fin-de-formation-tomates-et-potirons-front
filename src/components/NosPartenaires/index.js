// Component for Nos Partenaires page

// Local Imports
import './nos-partenaires.scss';
import { mapDataOurPartners } from 'src/data/googleMapsData';
import { closeBurgerMenu, closeSubMenu } from 'src/actions/menu';

// Packages Imports
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Sub Component Import
import NosPartenairesMap from './nosPartenairesMap';

const NosPartenaires = () => {
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
      <div className="our-partners-wrapper">

        <NosPartenairesMap />

        <div className="partners-list">
          <h1 className="partners-list__title">Nos Partenaires</h1>
          {mapDataOurPartners.map((partner) => (
            <div key={partner.id} className="partners-list__item">
              <h2 className="partner-name">{partner.name}</h2>
              <p className="partner-address">{partner.address}</p>
              <a
                href={partner.website}
                target="_blank"
                rel="noreferrer"
                className="partner-link"
              >
                Consulter leur site
              </a>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default NosPartenaires;
