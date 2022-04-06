// BurgerMenu Component

// NPM Imports
import { ChevronDown } from 'react-feather';

const BurgerMenu = () => (
  <nav className="burger-menu">
    <a href="#" className="burger-menu__links">Nos Activités <ChevronDown size={16} /></a>
    <a href="#" className="burger-menu__links">Vos Maraîchers</a>
    <a href="#" className="burger-menu__links">Notre Agriculture</a>
    <div className="burger-menu__links connect-cta">Mon Espace</div>
  </nav>
);

export default BurgerMenu;
