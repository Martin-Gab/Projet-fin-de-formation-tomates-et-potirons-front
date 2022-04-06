// Menu Component

// Package Imports
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';

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
        <img src={logo} alt="Le logo de tomates et potirons" className="main-logo" />
        <div
          onClick={() => {
            dispatch(toggleBurgerMenu());
          }}
        >
          {/* Si burgerMenu est true on affiche une croix autrement on affiche l'icône burger */}
          <FeatherIcon icon={burgerMenu ? 'x' : 'menu'} size={36} className="menu-burger" />
        </div>
      </div>
      {burgerMenu && <BurgerMenu />}
    </header>
  );
};

export default Menu;
