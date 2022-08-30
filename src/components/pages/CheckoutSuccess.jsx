import React from "react";
import { useNavigate } from "react-router-dom";

export const CheckoutSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="my-4 text-center">
      <h2>Thankyou for you order. we are currently processing your order</h2>
      <button
        className="text-indigo-500 font-bold text-md mt-4"
        onClick={() => navigate("/shop")}
      >
        Continue Shopping
      </button>
    </div>
  );
};
