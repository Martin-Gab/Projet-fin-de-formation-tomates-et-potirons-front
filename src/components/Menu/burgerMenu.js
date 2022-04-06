// BurgerMenu Component

// NPM Imports
import FeatherIcon from 'feather-icons-react';

const BurgerMenu = () => (
  <nav className="burger-menu">
    <a href="#" className="burger-menu__links">Nos Activités <FeatherIcon icon="chevron-down" /></a>
    <a href="#" className="burger-menu__links">Vos Maraîchers</a>
    <a href="#" className="burger-menu__links">Notre Agriculture</a>
    <div className="burger-menu__links connect-cta">Mon Espace</div>
  </nav>
);

export default BurgerMenu;
