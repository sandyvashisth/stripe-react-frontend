import { useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart-context";
import { fetchFromAPI } from "../../helper";

export const StripeCheckout = () => {
  const [email, setEmail] = useState("");
  const { cartItems } = useContext(CartContext);
  const stripe = useStripe();

  const handleCheckout = async (e) => {
    e.preventDefault();
    const line_items = cartItems.map(item => { 
      return {
        quantity: item.quantity,
        price_data: {
          currency: 'usd',
          unit_amount: item.price * 100, //price in cent
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.imageUrl]
          }
        }
      }
    })

    const { sessionId } = await fetchFromAPI('create-checkout-session', {
      body: {
      line_items, customer_email: email, payment_method: 'card',
      }
    })
    const { error } = await stripe.redirectToCheckout({
      sessionId
    })

    if (error) { 
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleCheckout}>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-md border-[1px] border-gray-500 p-2 w-72 my-4 focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="bg-indigo-500 rounded-md py-2 px-4 text-white">Checkout</button>
        </div>
      </form>
    </div>
  );
};
