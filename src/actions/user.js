// File with all the actions regarding the user

// Action Types
export const TOGGLE_CONTRACT = 'TOGGLE_CONTRACT';
export const TOGGLE_MEMBERS_LIST = 'TOGGLE_MEMBERS_LIST';
export const TOGGLE_CALENDAR = 'TOGGLE_CALENDAR';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const LOGGED = 'LOGGED';
export const LOGOUT = 'LOGOUT';

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

export const fetchUserInfo = (dataFromApi) => ({
  type: FETCH_USER_INFO,
  data: dataFromApi,
});

export const logged = () => ({
  type: LOGGED,
});

export const logout = () => ({
  type: LOGOUT,
});
