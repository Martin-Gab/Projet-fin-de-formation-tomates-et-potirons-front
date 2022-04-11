// Menu Component

// Package Imports
import {
  Menu as BurgerIcon,
  X,
  ChevronDown,
  ChevronUp,
} from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Local Imports
import './menu.scss';
import logo from 'src/assets/images/logo.png';
import { toggleBurgerMenu, toggleSubMenu } from 'src/actions/menu';
import { openLogin } from 'src/actions/login';
import BurgerMenu from './burgerMenu';
import SubMenu from './subMenu';

const Menu = () => {
  const dispatch = useDispatch();

  const burgerMenu = useSelector((state) => state.menu.burgerMenu);
  const subMenu = useSelector((state) => state.menu.subMenu);

  return (
    <header>
      <div className="menu-wrapper">
        <NavLink to="/">
          <img src={logo} alt="Le logo de tomates et potirons" className="main-logo" />
        </NavLink>
        <div className="menu">
          <div className="menu__dropdown">
            <div
              className="dropdown-link"
              onClick={() => {
                dispatch(toggleSubMenu());
              }}
            >
              Nos Activités {subMenu ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {subMenu && <SubMenu />}
          </div>
          <NavLink
            className="menu__links"
            to="/vos-maraichers"
          >
            Vos Maraîchers
          </NavLink>
          <NavLink
            className="menu__links"
            to="/notre-agriculture"
          >
            Notre Agriculture
          </NavLink>
          <div
            className="menu__links connect-cta"
            onClick={() => {
              dispatch(openLogin());
            }}
          >
            Mon Espace
          </div>
        </div>
        <div
          className="menu-burger"
          onClick={() => {
            dispatch(toggleBurgerMenu());
          }}
        >
          {/* Si burgerMenu est true on affiche une croix autrement on affiche l'icône burger */}
          {burgerMenu ? <X size={36} /> : <BurgerIcon size={36} />}
        </div>
      </div>
      {burgerMenu && <BurgerMenu />}
    </header>
  );
};

export default Menu;
