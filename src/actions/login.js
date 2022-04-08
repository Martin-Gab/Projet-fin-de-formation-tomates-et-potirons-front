// Action Types
export const INPUT_CHANGE_LOGIN = 'INPUT_CHANGE_LOGIN';
export const OPEN_LOGIN = 'OPEN_LOGIN';
export const CLOSE_LOGIN = 'CLOSE_LOGIN';

// Action Creators
export const inputChangeLogin = (newValue, field) => ({
  type: INPUT_CHANGE_LOGIN,
  value: newValue,
  field: field,
});

export const openLogin = () => ({
  type: OPEN_LOGIN,
});

export const closeLogin = () => ({
  type: CLOSE_LOGIN,
});
