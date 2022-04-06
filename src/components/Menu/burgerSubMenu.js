import { NavLink } from 'react-router-dom';

const BurgerSubMenu = () => (
  <div className="burger-menu sub-menu">
    <NavLink
      className="burger-menu__links"
      to="/nos-activites/vente-direct"
    >
      Vente Direct
    </NavLink>
    <NavLink
      className="burger-menu__links"
      to="/nos-activites/amap"
    >
      AMAP
    </NavLink>
    <NavLink
      className="burger-menu__links"
      to="/nos-activites/nos-partenaires"
    >
      Nos Partenaires
    </NavLink>
  </div>
);

export default BurgerSubMenu;
