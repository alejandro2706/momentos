import React from 'react'
import '../../styles/components/Products/Item.sass'
import addButton from '../../assets/icons/add-white.svg'

const Item = ({ name, image }) => {
  function handleClick() {
    //añadir al carrito
    alert('click')
  }
  return (
    <div className='Product-container'>
      <div className='Product'>
        <img src={image} alt='product' />
        <div className='Product-desc'>
          <h3>{name}</h3>
          <p>decorado</p>
          <button onClick={handleClick} type='button'>
            <img src={addButton} alt='add to cart' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
