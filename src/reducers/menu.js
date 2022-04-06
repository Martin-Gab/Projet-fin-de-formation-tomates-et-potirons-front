import { TOGGLE_BURGER_MENU, TOGGLE_BURGER_SUB_MENU } from 'src/actions/menu';

export const initialState = {
  burgerMenu: true,
  burgerSubMenu: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BURGER_MENU:
      return {
        ...state,
        burgerMenu: !state.burgerMenu,
      };

    case TOGGLE_BURGER_SUB_MENU:
      return {
        ...state,
        burgerSubMenu: !state.burgerSubMenu,
      };

    default:
      return state;
  }
};

export default reducer;
