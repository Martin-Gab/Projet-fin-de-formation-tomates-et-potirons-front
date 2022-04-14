// Component for 404 page

// Local Imports
import './not-found.scss';
import imgNotFound from 'src/assets/images/taxi-404.png';

// Packages Imports
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found-wrapper">
    <div className="not-found">
      <img src={imgNotFound} alt="page non trouvé" className="not-found__img" />
      <h1 className="not-found__title">Désolé la page recherchée n'a pas été trouvée !</h1>
      <NavLink to="/" className="not-found__cta">Revenir à l'accueil</NavLink>
    </div>
  </div>
);

export default NotFound;
