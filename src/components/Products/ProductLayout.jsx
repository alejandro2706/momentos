import React from 'react'
import ProductItem from './ProductItem'
import '../../styles/components/Products/ProductLayout.sass'

function ProductLayout({ title, products }) {

  return (
    <div className='Layout'>
      <h2>{title}</h2>
      <p>You will love It!</p>
      <div className='Toggle-products'>
        {/* <button type='button'>
          <Link to='/products/decorados'>
            Decorados
          </Link>
        </button> */}
      </div>
      <div className='Layout-grid'>
        {products ? products.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.data().title}
            image={item.data().image}
          />
        )) : <h1>Loading</h1>}
      </div>
    </div>
  )
}

export default ProductLayout
