import { TOGGLE_BURGER_MENU } from 'src/actions/menu';

export const initialState = {
  burgerMenu: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BURGER_MENU:
      return {
        ...state,
        burgerMenu: !state.burgerMenu,
      };

    default:
      return state;
  }
};

export default reducer;
