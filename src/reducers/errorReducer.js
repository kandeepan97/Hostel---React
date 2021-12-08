import { GET_ERRORS, LOGIN_FAIL, LOGOUT } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_ERRORS:
      return payload;
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('logged');
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('role');
      localStorage.removeItem('email');
      return {
        ...state
      }
    default:
      return state;
  }
}