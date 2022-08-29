import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart-context";
import { isInCart } from "../../helper";

export const FeatureProduct = ({ id, title, price, imageUrl, description }) => {
  const { addProduct, increase, cartItems } = useContext(CartContext);
  const product = { id, title, price, imageUrl, description };

  const hasInCart = isInCart(product, cartItems)

  const increaseQuantity = () => {
    increase(product)
  }

  const addToCart = () => {
    addProduct(product)
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <Link to={`/product/${id}`}>
          <img src={imageUrl} alt="" className="bg-gray-100 rounded-lg" />
        </Link>
        <div className="px-2">
          <Link to={`/product/${id}`}>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:tracking-tight">
              {title}
            </h2>
          </Link>
          <p className="mt-2 text-xl font-bold text-gray-500">${price}</p>
          {hasInCart ?(
            <button
              type="button"
              className="px-2 py-2 text-black bg-white border-2 rounded-sm mt-2"
              onClick={increaseQuantity}
            >
              Add More
            </button>): (
            <button
                type="button"
                className="px-2 py-2 text-black bg-white border-2 rounded-sm mt-2"
                onClick={addToCart}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
