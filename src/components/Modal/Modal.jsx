import React from 'react'
import './Modal.sass'

function Modal({ product }) {
  return (
    <div className='Modal'>
      <div className='Modal--container'>
        {product.title}
      </div>
      <div className='Modal--image'>
        <img src={product.image} alt='Product' />
      </div>
    </div>
  )
}

export default Modal
