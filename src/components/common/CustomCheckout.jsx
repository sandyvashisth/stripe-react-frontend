import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFromAPI } from "../../helper";

export const CustomCheckout = ({ shippingAddress, cartItems }) => {
  const [processing, setProcessing] = useState();
  const [formError, setFormError] = useState(null);
  const [secret, setSecret] = useState(null);
  const elements = useElements();
  const stripe = useStripe();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
      },
    });

    if (payload.error) {
      setFormError(`Payment Failed: ${payload.error?.message}`);
    } else {
      navigate("/payment-success");
    }
  };

  const checkout = async (body) => {
    const { clientSecret } = await fetchFromAPI("create-payment-intent", {
      body,
    });
    setSecret(clientSecret);
  };

  useEffect(() => {
    const items = cartItems.map((item) => ({
      price: item.price,
      quantity: item.quantity,
    }));
    if (shippingAddress) {
      const body = {
        cartItems: items,
        shipping: {
          name: "Jenny Rosen",
          address: {
            line1: "510 Townsend St",
            postal_code: "98140",
            city: "San Francisco",
            state: "CA",
            country: "US",
          },
        },
        description: "payment intent for foundation shop",
        receipt_email: shippingAddress.email,
      };
      checkout(body);
    }
  }, [shippingAddress, cartItems]);

  const cardChangeHandler = (event) => {
    const { error } = event;
    setFormError(error ? error?.message : null);
  };

  return (
    <div className="max-w-[300px] mx-auto">
      <h2 className="mt-4">Enter Card details</h2>
      <div className="grid gap-2 grid-cols-2">
        <div className="col-span-2 border-2 rounded-sm p-2 border-black">
          <CardNumberElement options={{}} onChange={cardChangeHandler} />
        </div>
        <div className="border-2 rounded-sm p-2 border-black">
          <CardExpiryElement options={{}} onChange={cardChangeHandler} />
        </div>
        <div className="border-2 rounded-sm p-2 border-black">
          <CardCvcElement options={{}} onChange={cardChangeHandler} />
        </div>
      </div>
      <div>
        <button
          disabled={processing}
          className={`mt-4 ${
            processing && !formError ? "bg-gray-500" : "bg-indigo-500"
          } rounded-sm py-1 px-2 text-white`}
          onClick={handleCheckout}
        >
          {processing && !formError ? "Processing" : "Pay"}
        </button>
      </div>
      <div className="text-red-500">{formError && <p>{formError}</p>}</div>
    </div>
  );
};
