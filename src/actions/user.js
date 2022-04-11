// File with all the actions regarding the user

// Action Types
export const TOGGLE_CONTRACT = 'TOGGLE_CONTRACT';
export const TOGGLE_MEMBERS_LIST = 'TOGGLE_MEMBERS_LIST';
export const TOGGLE_CALENDAR = 'TOGGLE_CALENDAR';

// Action Creators
export const toggleContract = () => ({
  type: TOGGLE_CONTRACT,
});

export const toggleMembersList = () => ({
  type: TOGGLE_MEMBERS_LIST,
});

export const toggleCalendar = () => ({
  type: TOGGLE_CALENDAR,
});
