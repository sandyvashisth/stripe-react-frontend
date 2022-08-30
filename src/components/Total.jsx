import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Total = ({ itemCount, total }) => {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 m-8 p-4 items-end">
      <div><p>Total items: {itemCount}</p></div>
      <div><p className="text-right">Total: {total}</p></div>
      <div className="">
        <button className="bg-indigo-500 py-2 px-4 rounded-md float-right" onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
    </div>
  )
}
