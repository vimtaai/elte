import jwt_decode from "jwt-decode";
import { authService } from "../../services/auth-service";
import { initStore, clearStore } from "../actions";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export function logIn(user) {
  return { type: LOG_IN, user };
}

export function logOut() {
  return { type: LOG_OUT };
}

export function restoreUser() {
  return async (dispatch) => {
    const token = authService.getToken();

    if (token) {
      const userData = jwt_decode(token);
      const user = await authService.getUserById(userData.sub);
      dispatch(logUserIn(user, token));
    }
  };
}

export function logUserIn(user, token) {
  return async (dispatch) => {
    authService.setToken(token);
    dispatch(logIn(user));
    dispatch(initStore());
  };
}

export function logUserOut() {
  return async (dispatch) => {
    authService.deleteToken();

    dispatch(clearStore());
    dispatch(logOut());
  };
}
