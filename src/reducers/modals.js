// Reducer for all the modals

export const initialState = {
  submitSuccessModal: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
