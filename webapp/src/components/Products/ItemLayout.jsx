import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
import '../../styles/components/Products/ItemLayout.sass'

const ProductLayout = ({ title, products }) => {
  return (
    <div className='Layout'>
      <h2>{title}</h2>
      <p>You will love It!</p>
      <div className='Toggle-products'>
        <button type='button'>
          <Link to='/products/decorados'>
            Decorados
          </Link>
        </button>
      </div>
      <div className='Layout-grid'>
        {products.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            image={item.image}
            decorado={item.decorated}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductLayout
