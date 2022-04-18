// Reducer to handle all the events regarding the maps in Vente Direct
// and Nos Partenaires pages

// Actions Imports
import { TOGGLE_VENTE_INFO_WINDOW, HYDRATE_SELECTED_PARTNER, CLEAR_SELECTED_PARTNER } from 'src/actions/maps';

export const initialState = {
  infoVenteIsOpen: false,
  selectedPartner: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_VENTE_INFO_WINDOW:
      return {
        ...state,
        infoVenteIsOpen: !state.infoVenteIsOpen,
      };

    case HYDRATE_SELECTED_PARTNER:
      return {
        ...state,
        selectedPartner: action.selectedPartner,
      };

    case CLEAR_SELECTED_PARTNER:
      return {
        ...state,
        selectedPartner: null,
      };

    default:
      return state;
  }
};

export default reducer;
