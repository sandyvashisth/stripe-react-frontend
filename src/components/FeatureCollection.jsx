import React, { useContext } from 'react'
import { ProductsContext } from '../context/products-context'
import { FeatureProduct } from './common/FeatureProduct'

export const FeatureCollection = () => {
  const { products } = useContext(ProductsContext)
  const productsItems = products.filter((_item, index) => index < 4).map((product, i) => <FeatureProduct {...product} key={i} />)
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mt-6 text-3xl font-bold">Featured Collection</h2>
      <div className="flex">{
      productsItems
      }</div>
    </div>
  )
}
