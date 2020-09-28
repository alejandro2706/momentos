import React from 'react'
import ProductItem from '../ProductItem'
import ProductsLoader from '../ProductsLoader'
import './ProductLayout.sass'

function ProductLayout({ title, products }) {

  return (
    <div className='Layout'>
      <h2>{title}</h2>
      <p>You will love It!</p>
      <div className='Layout-grid'>
        {products ? products.map((item) => (
          <ProductItem
            key={item.id}
            title={item.data().title}
            image={item.data().image}
          />
        )) : [1, 2, 3, 4].map((index) => <ProductsLoader key={index} />)}
      </div>
    </div>
  )
}

export default ProductLayout
