import React from "react";
import { useForm } from "react-hook-form";

export const ShippingAddress = ({ setAddress } ) => {
  const { handleSubmit, register } = useForm();

  return (
    <div className="max-w-[300px] mx-auto">
      <h2 className="mt-2">ShippingAddress</h2>
      <form onSubmit={handleSubmit(setAddress)}>
        <div>
          <input className="border-2 my-2 rounded-sm" placeholder="Name" type="text" {...register("name", { required: true })} />
        </div>
        <div>
          <input className="border-2 my-2 rounded-sm" placeholder="Email" type="text" {...register("email", { required: true })} />
        </div>
        <div>
          <input className="border-2 my-2 rounded-sm" placeholder="Address" type="text" {...register("address", { required: true })} />
        </div>
        <button className="bg-indigo-500 rounded-sm text-white py-1 px-2" type="submit">Continue</button>
      </form>
    </div>
  );
};
