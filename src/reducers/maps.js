// Reducer to handle all the events regarding the maps in Vente Direct
// and Nos Partenaires pages

// Actions Imports
import { TOGGLE_VENTE_INFO_WINDOW } from 'src/actions/maps';

export const initialState = {
  infoVenteIsOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_VENTE_INFO_WINDOW:
      return {
        ...state,
        infoVenteIsOpen: !state.infoVenteIsOpen,
      };

    default:
      return state;
  }
};

export default reducer;
