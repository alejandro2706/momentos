import React from 'react'
import './ProductItem.sass'
import addButton from '../../assets/icons/add-white.svg'
import { db } from '../../db/formController'
import { SwalWithNoButton } from '../../utils/SwalModals'

const ProductItem = ({ title, image, id }) => {
  function onAddToCart() {
    db.collection('carrito').add({
      id,
      title,
      image,
    })
      .then(() => SwalWithNoButton.fire({
        toast: true,
        title: 'Agregado correctamente',
        icon: 'success',
      }))
  }
  return (
    <div className='Product'>
      <img src={image} alt='product' />
      <div className='Product-desc'>
        <h3>{title}</h3>
        <button onClick={onAddToCart} type='button'>
          <img src={addButton} alt='add to cart' />
        </button>
      </div>
    </div>
  )
}

export default ProductItem
