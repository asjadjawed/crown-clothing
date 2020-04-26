import { CART_TOGGLE_HIDDEN, CART_ADD_ITEM } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CART_TOGGLE_HIDDEN,
});

export const addItem = (item) => ({
  type: CART_ADD_ITEM,
  payload: item,
});
