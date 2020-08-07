import React from 'react'
import '../../styles/components/Cart/CartProduct.sass'
import deleteIcon from '../../assets/icons/backspace.svg'
import minusIcon from '../../assets/icons/minus-square.svg'
import plusIcon from '../../assets/icons/plus-square.svg'

const CartProduct = ({ count, setCount, title, description, image }) => (
  <div className='Cart-product'>
    <div className='Cart-product_image'>
      <img src={image} alt='product cart' />
    </div>
    <div className='Cart-product_desc'>
      <h4>{title}</h4>
      <p>{description}</p>
      <p className='price'>$ 4.99</p>
    </div>
    <div className='Cart-product_buttons'>
      <button type='button' onClick={() => setCount(count > 0 && count - 1)}>
        <img src={minusIcon} alt='minus' />
      </button>
      <span>{count}</span>
      <button type='button' onClick={() => setCount(count + 1)}>
        <img src={plusIcon} alt='plus' />
      </button>
      <button type='button' className='delete'>
        <img src={deleteIcon} alt='delete' />
      </button>
    </div>
  </div>
)

export default CartProduct
