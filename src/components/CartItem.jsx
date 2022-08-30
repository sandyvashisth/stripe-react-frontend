import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from "./common/icons";

export const CartItem = (product) => {
  const { title, imageUrl, price, quantity } = product;
  const { increase, decrease, remove } = useContext(CartContext);
  return (
    <div className="grid grid-cols-4 gap-4 border-2 border-grey border-spacing-4 rounded-md p-4 m-8 items-center">
      <div>
        <img src={imageUrl} alt="product" width="50" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>${price}</p>
      </div>
      <div>
        <p>{quantity}</p>
      </div>
      <div className="grid grid-cols-3 max-w-xs">
        <button className="border-none" onClick={() => increase(product)}>
          <PlusCircleIcon />
        </button>
        {quantity >= 1 && (
          <button className="border-none" onClick={() => remove(product)}>
            <TrashIcon />
          </button>
        )}
        {quantity > 1 && (
          <button className="border-none" onClick={() => decrease(product)}>
            <MinusCircleIcon />
          </button>
        )}
      </div>
    </div>
  );
};
