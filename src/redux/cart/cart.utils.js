export const addItemToCart = (cartItems, newItem) => {
  const existingItem = cartItems.find((item) => item.id === newItem.id);

  if (existingItem)
    return cartItems.map((item) =>
      item.id === existingItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  else return [...cartItems, { ...newItem, quantity: 1 }];
};

export const decreaseItem = (cartItems, removeItem) => {
  const existingItem = cartItems.find((item) => item.id === removeItem.id);

  if (existingItem.quantity === 1)
    return cartItems.filter((item) => item.id !== removeItem.id);

  return cartItems.map((cartItem) =>
    cartItem.id === removeItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
