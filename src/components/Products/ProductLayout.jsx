import React from 'react'
// import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'
import '../../styles/components/Products/ProductLayout.sass'

function ProductLayout({ title, products }) {

  function onAddToCart() {
    //añadir al carrito
    alert('click')
  }
  return (
    <div className='Layout'>
      <h2>{title}</h2>
      <p>You will love It!</p>
      {/* <div className='Toggle-products'>
        <button type='button'>
          <Link to='/products/decorados'>
            Decorados
          </Link>
        </button>
      </div> */}
      <div className='Layout-grid'>
        {products ? products.map((item) => (
          <ProductItem
            key={item.id}
            name={item.data().title}
            image={item.image || 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
            onAddToCart={onAddToCart}
          />
        )) : <h1>Loading</h1>}
      </div>
    </div>
  )
}

export default ProductLayout
