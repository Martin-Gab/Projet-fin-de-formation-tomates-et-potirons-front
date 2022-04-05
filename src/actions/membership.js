// File with all the actions regarding the membership form

// Action Types
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const TOGGLE_BASKET_OPTION = 'TOGGLE_BASKET_OPTION';
export const CLOSE_FORM = 'CLOSE_FORM';
export const SUBMIT_MEMBERSHIP = 'SUBMIT_MEMBERSHIP';

// Action Creators
export const changeInput = (newValue, fieldName) => ({
  type: CHANGE_INPUT,
  value: newValue,
  field: fieldName,
});

export const toggleBasketOption = (onOrOff) => ({
  type: TOGGLE_BASKET_OPTION,
  toggle: onOrOff,
});

export const closeForm = () => ({
  type: CLOSE_FORM,
});

export const submitMembership = () => ({
  type: SUBMIT_MEMBERSHIP,
});
