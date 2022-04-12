// Packages Imports
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Local Imports
import { toggleUserSubMenu } from 'src/actions/menu';

const UserSubMenu = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="sub-menu"
      onMouseLeave={() => {
        dispatch(toggleUserSubMenu());
      }}
    >
      <NavLink
        className="sub-menu__links"
        to="/mon-espace/tableau-de-bord"
      >
        Tableau de bord
      </NavLink>
      <NavLink
        className="sub-menu__links"
        to="/mon-espace/profil"
      >
        Profil
      </NavLink>
    </div>
  );
};

export default UserSubMenu;
