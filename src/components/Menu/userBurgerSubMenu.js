import { NavLink } from 'react-router-dom';

const UserBurgerSubMenu = () => (
  <div className="burger-menu sub-menu">
    <NavLink
      className="burger-menu__links"
      to="/mon-espace/tableau-de-bord"
    >
      Tableau de bord
    </NavLink>
    <NavLink
      className="burger-menu__links"
      to="/mon-espace/profil"
    >
      Profil
    </NavLink>
  </div>
);

export default UserBurgerSubMenu;
