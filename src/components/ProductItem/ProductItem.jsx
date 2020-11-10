import React, { useState } from 'react'
import './ProductItem.sass'
import addButton from '../../assets/icons/add-white.svg'
import ModalContainer from '../../containers/ModalContainer'

const ProductItem = ({ title, image }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleViewProduct = () => {
    setIsOpen(true)
    console.log(title, image)
  }
  return (
    <>
      <div className='Product'>
        <img src={image} alt='product' />
        <div className='Product-desc'>
          <h3>{title}</h3>
          <button type='button' onClick={handleViewProduct}>
            <img src={addButton} alt='add to cart' />
          </button>
        </div>
      </div>
      <ModalContainer isOpen={isOpen} closeModal={setIsOpen} product={{ title, image }} />
    </>
  )
}

export default ProductItem
