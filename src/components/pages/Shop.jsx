import React, { useContext } from 'react'
import { ProductsContext } from '../../context/products-context'
import { FeatureProduct } from '../common/FeatureProduct'
import { Layout } from '../common/Layout'

export const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <Layout>
      <h2 className="mt-4 text-3xl tracking-tight font-bold text-center">Shop</h2>
      <div className="flex flex-wrap justify-center items-center">
        {
          products.map(product => (<div key={product.id} className="shrink-0 grow-0 basis-[300px]"><FeatureProduct { ...product } /></div>))
          }
      </div>
    </Layout>
  )
}
