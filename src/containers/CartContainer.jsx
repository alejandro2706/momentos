import React from 'react'
import ReactDOM from 'react-dom'
import '../sass/CartContainer.sass'
import Cart from '../components/Cart/Cart'

const CartContainer = ({ isOpen, className }) => {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <div className='overlay'>
        <Cart className={className} />
      </div>
      , document.getElementById('Modal'),
    )
  )

}

export default CartContainer
