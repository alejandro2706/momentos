import React, { useState } from 'react'
import '../../styles/components/Cart/Cart.sass'
import CartProduct from './CartProduct'
import image from '../../assets/images/galletas.png'

function Cart({ className }) {
  const [count, setCount] = useState(0)
  return (
    <div className={`Cart ${className}`}>
      <h3>Carrito de Compras</h3>
      <hr className='hr_cart' />
      <div className='Cart-products'>
        <CartProduct
          title='Product Title'
          description='Description about the product on the cart'
          image={image}
          count={count}
          setCount={setCount}
        />
      </div>
    </div>
  )
}

export default Cart
