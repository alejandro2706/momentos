import React from 'react'
import ProductItem from './ProductItem'
import '../../styles/components/ProductLayout.sass'

const ProductLayout = ({ title }) => (
  <div className='Layout'>
    <h2>{title}</h2>
    <p>You will love It!</p>
    <div className='Toggle-products'>
      <button type='button'>
        Decorados
      </button>
      <button type='button'>
        No decorados
      </button>
    </div>
    <div className='Layout-grid'>
      <ProductItem name='Chocolate' />
      <ProductItem name='Vainilla' />
      <ProductItem name='Almendra' />
      <ProductItem name='Mandarina' />
    </div>
  </div>
)

export default ProductLayout
