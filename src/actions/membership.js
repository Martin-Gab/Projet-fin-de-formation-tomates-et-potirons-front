// File with all the actions regarding the membership form

// Action Types
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const TOGGLE_BASKET_OPTION = 'TOGGLE_BASKET_OPTION';

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
