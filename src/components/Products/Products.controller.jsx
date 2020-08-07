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
        {products.map((item) => (
          <ProductItem
            key={item.id}
            name={item.name}
            image={item.image}
            decorado={item.decorated}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductLayout
