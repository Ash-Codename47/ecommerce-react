import { REGISTER_SUCCESS } from "../types";
import { USER_LOADED, AUTH_ERROR } from "../types";

const initialState = {
  token: "",
  user: null,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, isAuthenticated: true, token: payload.token };
    case USER_LOADED:
      return { ...state, user: payload };
   
    default:
      return state;
  }
};
