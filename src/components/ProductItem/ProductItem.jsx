import React from 'react'
import './ProductItem.sass'
import addButton from '../../assets/icons/add-white.svg'

const ProductItem = ({ title, image }) => {

  return (
    <div className='Product'>
      <img src={image} alt='product' />
      <div className='Product-desc'>
        <h3>{title}</h3>
        <button type='button'>
          <img src={addButton} alt='add to cart' />
        </button>
      </div>
    </div>
  )
}

export default ProductItem
