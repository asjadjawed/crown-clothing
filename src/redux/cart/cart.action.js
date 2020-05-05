import {
  CART_TOGGLE_HIDDEN,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_DECREASE_ITEM,
} from "./cart.types";

export const toggleCartHidden = () => ({
  type: CART_TOGGLE_HIDDEN,
});

export const addItem = (item) => ({
  type: CART_ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CART_REMOVE_ITEM,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: CART_DECREASE_ITEM,
  payload: item,
});
