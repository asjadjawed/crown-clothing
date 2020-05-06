import shopData from "./shop.data";

const INITIAL_STATE = { collection: shopData };

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
