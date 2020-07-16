import React from 'react'
import '../../styles/components/ProductItem.sass'
import addButton from '../../assets/icons/add.svg'

const ProductItem = ({ name }) => {
  function handleClick() {
    alert('click')
  }
  return (
    <div className='Product'>
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
