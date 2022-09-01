import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import { CustomCheckout } from "../common/CustomCheckout";
import { Layout } from "../common/Layout";
import { ShippingAddress } from "../common/ShippingAddress";
import { StripeCheckout } from "../common/StripeCheckout";

export const Checkout = () => {
  const { itemCount, total, cartItems } = useContext(CartContext);
  const [ shippingAddress, setShippingAddress] = useState(null)
  return (
    <Layout>
      <div className="mt-8 text-center">
        <h2 className="font-bold">Checkout summary</h2>
        <h3 className="mt-4 font-bold">{`Total items: ${itemCount}`}</h3>
        <h4 className="mt-4 font-bold">{`Amount to Pay: $${total}`}</h4>
        {/* <StripeCheckout /> */}
        {!shippingAddress && <ShippingAddress setAddress={setShippingAddress} />}
        {shippingAddress && <CustomCheckout shippingAddress={shippingAddress} cartItems={cartItems} />}
      </div>
    </Layout>
  );
};
