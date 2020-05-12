import { LOG_IN, LOG_OUT } from "./actions";

export function userReducer(state = null, action) {
  const { type } = action;

  if (type === LOG_IN) {
    const { user } = action;
    return user;
  }

  if (type === LOG_OUT) {
    return null;
  }

  return state;
}
