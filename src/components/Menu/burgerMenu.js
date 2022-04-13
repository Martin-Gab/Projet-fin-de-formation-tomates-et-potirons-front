// BurgerMenu Component

// Packages Imports
import { ChevronDown, ChevronUp } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Local Imports
import { toggleBurgerSubMenu, toggleUserBurgerSubMenu } from 'src/actions/menu';
import { openLogin } from 'src/actions/login';
import BurgerSubMenu from './burgerSubMenu';
import UserBurgerSubMenu from './userBurgerSubMenu';

const BurgerMenu = () => {
  const dispatch = useDispatch();

  const burgerSubMenu = useSelector((state) => state.menu.burgerSubMenu);
  const userBurgerSubMenu = useSelector((state) => state.menu.userBurgerSubMenu);
  const isConnected = useSelector((state) => state.user.isConnected);

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
      {!isConnected && (
        <div
          className="burger-menu__links connect-cta"
          onClick={() => {
            dispatch(openLogin());
          }}
        >
          Mon Espace
        </div>
      )}
      {isConnected && (
        <>
          <div
            className="burger-menu__links"
            onClick={() => {
              dispatch(toggleUserBurgerSubMenu());
            }}
          >
            Mon Espace {userBurgerSubMenu ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
          {userBurgerSubMenu && <UserBurgerSubMenu />}
          <div className="burger-menu__links connect-cta">
            Se déconnecter
          </div>
        </>
      )}
    </nav>
  );
};

export default BurgerMenu;
