// File with all the actions regarding the menu

// Action Types
export const TOGGLE_BURGER_MENU = 'TOGGLE_BURGER_MENU';
export const TOGGLE_BURGER_SUB_MENU = 'TOGGLE_BURGER_SUB_MENU';

// Action Creators
export const toggleBurgerMenu = () => ({
  type: TOGGLE_BURGER_MENU,
});

export const toggleBurgerSubMenu = () => ({
  type: TOGGLE_BURGER_SUB_MENU,
});
