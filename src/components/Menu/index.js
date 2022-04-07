// Menu Component

// Package Imports
import { Menu as BurgerIcon, X } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Local Imports
import './menu.scss';
import logo from 'src/assets/images/logo.png';
import { toggleBurgerMenu } from 'src/actions/menu';
import BurgerMenu from './burgerMenu';

const Menu = () => {
  const dispatch = useDispatch();

  const burgerMenu = useSelector((state) => state.menu.burgerMenu);

  return (
    <header>
      <div className="menu-wrapper">
        <NavLink to="/">
          <img src={logo} alt="Le logo de tomates et potirons" className="main-logo" />
        </NavLink>
        <div
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
