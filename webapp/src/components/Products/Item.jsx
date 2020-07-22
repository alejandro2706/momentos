import React from 'react'
import '../../styles/components/Products/Item.sass'
import addButton from '../../assets/icons/add-white.svg'

const ProductItem = ({ name, image }) => {
  function handleClick() {
    alert('click')
  }
  return (
    <div className='Product'>
      <img src={image} alt='product' />
      <div className='Product-desc'>
        <h3>{name}</h3>
        <button onClick={handleClick} type='button'>
          <img src={addButton} alt='add to cart' />
        </button>
      </div>
    </div>
  )
}

export default ProductItem
