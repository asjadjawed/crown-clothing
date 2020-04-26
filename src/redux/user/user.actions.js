import { USER_SET_CURRENT } from "./user.types";

export const setCurrentUser = (user) => ({
  type: USER_SET_CURRENT,
  payload: user,
});
