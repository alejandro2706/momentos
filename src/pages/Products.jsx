import React from 'react'
import ProductLayout from '../components/Products/Products.controller'

const Products = ({ title, productsData }) => {
  return (
    <ProductLayout
      title={title}
      products={productsData}
    />
  )
}

export default Products
