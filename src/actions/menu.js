// File with all the actions regarding the menu

// Action Types
export const TOGGLE_BURGER_MENU = 'TOGGLE_BURGER_MENU';
export const TOGGLE_BURGER_SUB_MENU = 'TOGGLE_BURGER_SUB_MENU';
export const CLOSE_BURGER_MENU = 'CLOSE_BURGER_MENU';
export const TOGGLE_SUB_MENU = 'TOGGLE_SUB_MENU';
export const CLOSE_SUB_MENU = 'CLOSE_SUB_MENU';

// Action Creators
export const toggleBurgerMenu = () => ({
  type: TOGGLE_BURGER_MENU,
});

export const toggleBurgerSubMenu = () => ({
  type: TOGGLE_BURGER_SUB_MENU,
});

export const closeBurgerMenu = () => ({
  type: CLOSE_BURGER_MENU,
});

export const toggleSubMenu = () => ({
  type: TOGGLE_SUB_MENU,
});

export const closeSubMenu = () => ({
  type: CLOSE_SUB_MENU,
});
