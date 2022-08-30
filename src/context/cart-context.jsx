import { createContext, useReducer } from "react";
import { cartReducer, sumOfItems } from "./cart-reducer";

export const CartContext = createContext();

const cartFromStorage = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')): [];

const initialState = { cartItems: cartFromStorage, ...sumOfItems(cartFromStorage)};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product) =>
    dispatch({ type: "ADD_ITEM", payload: product });
  const increase = (product) =>
    dispatch({ type: "INCREASE", payload: product });
  const decrease = (product) =>
    dispatch({ type: "DECREASE", payload: product });
  const remove = (product) => dispatch({ type: 'REMOVE', payload: product})

  return (
    <CartContext.Provider value={{ ...state, addProduct, increase, decrease, remove }}>
      {children}
    </CartContext.Provider>
  );
};
