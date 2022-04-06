// BurgerMenu Component

// Packages Imports
import { ChevronDown, ChevronUp } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';

// Local Imports
import BurgerSubMenu from './burgerSubMenu';
import { toggleBurgerSubMenu } from 'src/actions/menu';

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
      <a href="#" className="burger-menu__links">Vos Maraîchers</a>
      <a href="#" className="burger-menu__links">Notre Agriculture</a>
      <div className="burger-menu__links connect-cta">Mon Espace</div>
    </nav>
  );
};

export default BurgerMenu;
