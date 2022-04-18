// Component for Vente Direct page

// Local Imports
import './vente-direct.scss';

// Sub Component Import
import VenteDirectMap from './venteDirectMap';

const VenteDirect = () => (
  <main>
    <div className="vente-direct-wrapper">

      <VenteDirectMap />

      <div className="vente-direct-content">
        <h1 className="vente-direct-content__title">Vente Direct</h1>
        <p className="vente-direct-content__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Cum sit officia earum veniam est! Ipsa necessitatibus,
          soluta sequi quae repudiandae excepturi in dolores fugiat
          temporibus corrupti repellat pariatur est tempora.
        </p>
        <div className="vente-direct-highlight">
          <p className="vente-direct-content__location">
            A la ferme <br />
            27 route d'Anxaumont <br />
            86800 Sèvres-Anxaumont
          </p>
          <p className="vente-direct-content__hours">
            Mercredi : 14h-17h30 <br />
            Vendredi : 14h-17h30 <br />
            Samedi : 09h-12H30
          </p>
        </div>
      </div>

    </div>
  </main>
);

export default VenteDirect;
