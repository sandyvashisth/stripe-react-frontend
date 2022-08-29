import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative h-screen flex flex-col justify-center items-center z-[2]">
        <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
          Bag re-imagined for life
        </h1>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <Link
              to="/shop"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <img
        className=" absolute top-0 left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
    </div>
  );
};
