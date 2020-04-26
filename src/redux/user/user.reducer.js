import { USER_SET_CURRENT } from "./user.types";

const INITIAL_USER_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case USER_SET_CURRENT:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
