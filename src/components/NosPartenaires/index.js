// Component for Nos Partenaires page

// Local Imports
import './nos-partenaires.scss';

// Sub Component Import
import NosPartenairesMap from './nosPartenairesMap';

const NosPartenaires = () => {
  let test;

  return (
    <main>
      <div className="our-partners-wrapper">

        <NosPartenairesMap />

        <div className="partners-list">
          <h1 className="partners-list__title">Nos Partenaires</h1>
          <div className="partners-list__item">
            <h2 className="partner-name">La Cuisine de Comptoir</h2>
            <p className="partner-address">92 Avenue du Plt des Glières, 86000 Poitiers</p>
          </div>
          <div className="partners-list__item">
            <h2 className="partner-name">La Cuisine de Comptoir</h2>
            <p className="partner-address">92 Avenue du Plt des Glières, 86000 Poitiers</p>
          </div>
          <div className="partners-list__item">
            <h2 className="partner-name">La Cuisine de Comptoir</h2>
            <p className="partner-address">92 Avenue du Plt des Glières, 86000 Poitiers</p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default NosPartenaires;
