import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "./common/Layout";
import { ProductsContext } from "../context/products-context";
import { CartContext } from "../context/cart-context";
import { isInCart } from "../helper";

export const ProductDetail = () => {
  const [product, setProduct] = useState({
    id: null,
    title: null,
    price: null,
    description: null,
    imageUrl: null,
  });
  const { products } = useContext(ProductsContext);
  const { addProduct, increase, cartItems } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const item = products.find((prod) => Number(prod.id) === Number(id));
    if (!item) {
      navigate(-1);
    }
    setProduct(item);
  }, [navigate, products, id, product]);

  const hasInCart = isInCart(product, cartItems);

  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-24 px-4 flex gap-4">
        <div className="shrink-0 grow-0 basis-80">
          <img
            src={product?.imageUrl}
            alt=""
            className="bg-gray-100 rounded-lg"
          />
        </div>
        <div className="px-2">
          <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:tracking-tight">
            {product?.title}
          </h2>
          <p className="mt-2 text-xl font-bold text-gray-500">
            ${product?.price}
          </p>

          {hasInCart && (
            <button
              type="button"
              className="w-full px-2 py-2 text-black bg-white border-2 rounded-sm mt-2"
              onClick={() => increase(product)}
            >
              Add More
            </button>
          )}
          {!hasInCart && (
            <button
              type="button"
              className="w-full px-2 py-2 text-black bg-white border-2 rounded-sm mt-2"
              onClick={() => addProduct(product)}
            >
              Add to cart
            </button>
          )}

          <button
            type="button"
            className="w-full px-2 py-2 text-white bg-black rounded-sm mt-2"
            onClick={() => {}}
          >
            Proceed to Checkout
          </button>

          <p className="mt-2 text-sm  text-gray-700">${product?.description}</p>
        </div>
      </div>
    </Layout>
  );
};
