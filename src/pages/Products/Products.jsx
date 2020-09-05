import React from 'react'
import ProductLayout from '../../components/ProductLayout'

const Products = ({ title, productsData }) => {
  return (
    <ProductLayout
      title={title}
      products={productsData}
    />
  )
}

export default Products
