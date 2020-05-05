import {
  CART_TOGGLE_HIDDEN,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from "./cart.types.js";
import { addItemToCart } from "./cart.utils";

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
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
