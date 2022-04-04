// File with all the actions regarding the membership form

// Action Types
export const CHANGE_INPUT = 'CHANGE_INPUT';

// Action Creators
export const changeInput = (newValue, fieldName) => ({
  type: CHANGE_INPUT,
  value: newValue,
  field: fieldName,
});
