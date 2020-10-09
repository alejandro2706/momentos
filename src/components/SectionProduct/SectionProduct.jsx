import React from 'react'
import './SectionProduct.sass'
import { Link } from 'react-router-dom'
import useNearScreen from '../../hooks/useNearScreen'

const SectionProduct = ({ image, title, id, description }) => {
  const { className, product } = useNearScreen()

  return (
    <div className={`Section-products ${className}`} ref={product}>
      <div className='Section-products_image'>
        <img src={image} alt='product1' />
      </div>
      <div className='Section-products_desc'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='Section-products_button'>
          <Link to={`p/${id}?t=${title}`}>
            <button type='button'>
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SectionProduct
