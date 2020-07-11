import React from 'react'
import ProductItem from './ProductItem'
import '../styles/components/ProductLayout.sass'

const ProductLayout = () => {
  return (
    <div className='Layout'>
      <h2>Products</h2>
      <p>You will love It!</p>
      <div className='Layout-grid'>
        <ProductItem category='Disfrutar' />
        <ProductItem category='Regalar' />
        <ProductItem category='Acompañar' />
        <ProductItem category='Especial' />
      </div>
    </div>
  )
}

export default ProductLayout
