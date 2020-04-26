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
