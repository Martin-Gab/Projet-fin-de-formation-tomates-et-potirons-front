// All the actions regarding the google maps

// Action Types
export const TOGGLE_VENTE_INFO_WINDOW = 'TOGGLE_VENTE_INFO_WINDOW';
export const HYDRATE_SELECTED_PARTNER = 'HYDRATE_SELECTED_PARTNER';
export const CLEAR_SELECTED_PARTNER = 'CLEAR_SELECTED_PARTNER';

// Action Creators
export const toggleVenteInfoWindow = () => ({
  type: TOGGLE_VENTE_INFO_WINDOW,
});

export const hydrateSelectedPartner = (selectedPartner) => ({
  type: HYDRATE_SELECTED_PARTNER,
  selectedPartner: selectedPartner,
});

export const clearSelectedPartner = () => ({
  type: CLEAR_SELECTED_PARTNER,
});
