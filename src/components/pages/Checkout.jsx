import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { Layout } from "../common/Layout";
import { StripeCheckout } from "./StripeCheckout";

export const Checkout = () => {
  const { itemCount, total } = useContext(CartContext);
  return (
    <Layout>
      <div className="mt-8 text-center">
        <h2 className="font-bold">Checkout summary</h2>
        <h3 className="mt-4 font-bold">{`Total items: ${itemCount}`}</h3>
        <h4 className="mt-4 font-bold">{`Amount to Pay: $${total}`}</h4>
        <StripeCheckout />
      </div>
    </Layout>
  );
};
