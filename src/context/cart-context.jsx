import { createContext, useReducer } from "react";
import { cartReducer } from "./cart-reducer";

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product) => dispatch({ type: 'ADD_ITEM', payload: product });
  const increase = (product) => dispatch({ type: 'INCREASE', payload: product });

  return (
    <CartContext.Provider value={{ ...state, addProduct, increase, }}>{children}</CartContext.Provider>
  );
};
