// Menu Component

// Local Imports
import './menu.scss';
import logo from 'src/assets/images/logo.png';

// Package Imports
import FeatherIcon from 'feather-icons-react';

const Menu = () => (
  <div className="menu-wrapper">
    <img src={logo} alt="Le logo de tomates et potirons" className="main-logo" />
    <FeatherIcon icon="menu" size={36} className="menu-burger" />
  </div>
);

export default Menu;
