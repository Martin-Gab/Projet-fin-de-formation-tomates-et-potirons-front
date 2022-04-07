// File with all the actions regarding the membership form

// Action Types
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const TOGGLE_BASKET_OPTION = 'TOGGLE_BASKET_OPTION';
export const OPEN_FORM = 'OPEN_FORM';
export const CLOSE_FORM = 'CLOSE_FORM';

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

export const openForm = () => ({
  type: OPEN_FORM,
});

export const closeForm = () => ({
  type: CLOSE_FORM,
});
