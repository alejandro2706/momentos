import React from 'react'
import './Modal.sass'

function Modal({ closeModal, product }) {
  return (
    <div className='Modal' onClick={closeModal} role='presentation'>
      <div className='Modal--container'>
        {product.title}
      </div>
    </div>
  )
}

export default Modal
