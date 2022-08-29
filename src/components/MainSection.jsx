import React from "react";
import { Link } from "react-router-dom";

export const MainSection = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative h-screen flex flex-col justify-center items-center z-[2]">
        <h2 className="text-4xl tracking-tight font-bold text-gray-100 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
          Designed for fashion. crafted for sport.
        </h2>
        <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow">
            <Link
              to="/products"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              STUDIO BAG
            </Link>
          </div>
        </div>
      </div>

      <img
        className=" absolute top-0 left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
    </div>
  );
};
