import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { CartItem } from "../CartItem";
import { Layout } from "../common/Layout";
import { Total } from "../Total";

export const Cart = () => {
  const { cartItems, itemCount, total } = useContext(CartContext);
  return (
    <Layout>
      <h2 className="text-2xl font-bold mt-2 text-center">Cart</h2>
      {itemCount > 0 ? (
        cartItems.map((product) => <CartItem key={product.id} {...product} />)
      ) : (
        <div className="text-center mt-16 min-h-[500px]">
          Cart is empty
        </div>
      )}
      {itemCount > 0 && <Total itemCount={itemCount} total={total} />}
    </Layout>
  );
};
