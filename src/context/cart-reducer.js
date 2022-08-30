const storeCartItems = (cartItems) => {
  const cart = cartItems.length > 0 ? cartItems : [];
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const sumOfItems = (cartItems) => {
  storeCartItems(cartItems);
  return {
    itemCount: cartItems.reduce(
      (total, product) => Number(total) + Number(product.quantity),
      0
    ),
    total: cartItems.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    ),
  };
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // check if cart is already in cart
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumOfItems(state.cartItems),
      };
    case "INCREASE":
      const increaseIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems[increaseIndex].quantity += 1;

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumOfItems(state.cartItems),
      };
    case "DECREASE":
      const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      const product = state.cartItems[decreaseIndex];
      if (product.quantity > 1) {
        product.quantity--;
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumOfItems(state.cartItems)
      }
    case 'REMOVE':
      const newCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cartItems: [...newCartItems],
        ...sumOfItems(newCartItems)
      }
    default:
      return state;
  }
};
