import React, { useState, useEffect } from 'react'
import '../../styles/components/Cart/Cart.sass'
import CartProduct from './CartProduct'
import { db } from '../../db/formController'
import CartEmpty from './CartEmpty'

function Cart({ className }) {
  const [productCart, setProductCart] = useState()
  const isProducts = productCart?.length > 0
  useEffect(() => {
    db.collection('carrito').onSnapshot((querySnapshot) => {
      setProductCart(querySnapshot.docs)
    })
  }, [])

  return (
    <div className={`Cart ${className}`}>
      <h3>Carrito de Compras</h3>
      <hr className='hr_cart' />
      <div className='Cart-products'>
        {isProducts ? productCart.map((product) => (
          <CartProduct
            key={product.id}
            id={product.id}
            title={product.data().title}
            description='Descripción del producto dummy'
            image={product.data().image}
          />
        )) : <CartEmpty />}
      </div>
    </div>
  )
}

export default Cart
