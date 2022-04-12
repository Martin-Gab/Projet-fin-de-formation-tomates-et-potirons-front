import {
  TOGGLE_BURGER_MENU,
  TOGGLE_BURGER_SUB_MENU,
  CLOSE_BURGER_MENU,
  TOGGLE_SUB_MENU,
  CLOSE_SUB_MENU,
  TOGGLE_USER_SUB_MENU,
} from 'src/actions/menu';

export const initialState = {
  burgerMenu: false,
  burgerSubMenu: false,
  subMenu: false,
  userSubMenu: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BURGER_MENU:
      return {
        ...state,
        burgerMenu: !state.burgerMenu,
        burgerSubMenu: false,
      };

    case TOGGLE_BURGER_SUB_MENU:
      return {
        ...state,
        burgerSubMenu: !state.burgerSubMenu,
      };

    case CLOSE_BURGER_MENU:
      return {
        ...state,
        burgerMenu: false,
        burgerSubMenu: false,
        userSubMenu: false,
      };

    case TOGGLE_SUB_MENU:
      return {
        ...state,
        subMenu: !state.subMenu,
      };

    case CLOSE_SUB_MENU:
      return {
        ...state,
        subMenu: false,
      };

    case TOGGLE_USER_SUB_MENU:
      return {
        ...state,
        userSubMenu: !state.userSubMenu,
      };

    default:
      return state;
  }
};

export default reducer;
