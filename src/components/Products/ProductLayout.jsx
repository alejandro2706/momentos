import React from 'react'
import ProductItem from './ProductItem'
import '../../styles/components/ProductLayout.sass'

const images = {
  cupcake: 'https://images.pexels.com/photos/268364/pexels-photo-268364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  cookies: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
}

const ProductLayout = ({ title }) => {
  return (
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
        <ProductItem
          name='Chocolate'
          image={images.cupcake}
        />
        <ProductItem
          name='Vainilla'
          image={images.cookies}
        />
        <ProductItem
          name='Almendra'
          image={images.cookies}
        />
        <ProductItem
          name='Mandarina'
          image={images.cupcake}
        />
      </div>
    </div>
  )
}

export default ProductLayout
