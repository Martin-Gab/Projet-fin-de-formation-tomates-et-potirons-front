// Packages Imports
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Local Imports
import { toggleSubMenu } from 'src/actions/menu';

const SubMenu = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="sub-menu"
      onMouseLeave={() => {
        dispatch(toggleSubMenu());
      }}
    >
      <NavLink
        className="sub-menu__links"
        to="/nos-activites/vente-direct"
      >
        Vente Direct
      </NavLink>
      <NavLink
        className="sub-menu__links"
        to="/nos-activites/amap"
      >
        AMAP
      </NavLink>
      <NavLink
        className="sub-menu__links"
        to="/nos-activites/nos-partenaires"
      >
        Nos Partenaires
      </NavLink>
    </div>
  );
};

export default SubMenu;
