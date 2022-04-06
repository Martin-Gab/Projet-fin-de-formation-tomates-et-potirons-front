// BurgerMenu Component

// Packages Imports
import { ChevronDown, ChevronUp } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Local Imports
import { toggleBurgerSubMenu } from 'src/actions/menu';
import BurgerSubMenu from './burgerSubMenu';

const BurgerMenu = () => {
  const dispatch = useDispatch();

  const burgerSubMenu = useSelector((state) => state.menu.burgerSubMenu);

  return (
    <nav className="burger-menu">
      <div
        className="burger-menu__links"
        onClick={() => {
          dispatch(toggleBurgerSubMenu());
        }}
      >
        Nos Activités {burgerSubMenu ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {burgerSubMenu && <BurgerSubMenu />}
      <NavLink
        className="burger-menu__links"
        to="/vos-maraichers"
      >
        Vos Maraîchers
      </NavLink>
      <NavLink
        className="burger-menu__links"
        to="/notre-agriculture"
      >
        Notre Agriculture
      </NavLink>
      <div className="burger-menu__links connect-cta">Mon Espace</div>
    </nav>
  );
};

export default BurgerMenu;
