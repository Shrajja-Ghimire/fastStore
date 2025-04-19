import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../../actions/types";

const initialState = {
  user: null,
  error: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
      return { ...state, user: null, isAuthenticated: false, error: null };
    default:
      return state;
  }
};
