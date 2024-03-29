import { USER_ACTION_TYPES } from "./user.types.js";

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.CHECK_USER_SESSION:
      return {
        ...state,
      };

    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };

    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };

    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
      return {
        ...state,
        currentUser: payload,
      };

    case USER_ACTION_TYPES.SIGN_UP_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    case USER_ACTION_TYPES.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      };

    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
