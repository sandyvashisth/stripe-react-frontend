import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout } from '../common/Layout'

export const CheckoutCancel = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <h2>Payment failed</h2>
        <p>Payment was not successful</p>
        <button
        className="text-indigo-500 font-bold text-md mt-4"
        onClick={() => navigate("/shop")}
      >
        Continue Shopping
      </button>
      </div>
    </Layout>
  )
}
