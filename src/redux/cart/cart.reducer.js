import { CART_TOGGLE_HIDDEN, CART_ADD_ITEM } from "./cart.types.js";

const INITIAL_CART_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_CART_STATE, action) => {
  switch (action.type) {
    case CART_TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CART_ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
