import React from 'react'
import '../../styles/components/Home/SectionProduct.sass'
import { Link } from 'react-router-dom'

const SectionProduct = ({ image, title, productClass, productRef }) => (
  <div className={productClass} ref={productRef}>
    <div className='Section-products'>
      <div className='Section-products_image'>
        <img src={image} alt='product1' />
      </div>
      <div className='Section-products_desc'>
        <h3>{title}</h3>
        <p>Cada producto puede ser modificado a gusto por el usuario, Contiene un sin fín de sabores únicos y espectaculares que van acorde al feeling de la marca</p>
        <div className='Section-products_button'>
          <Link to={`/products/${title}`}>
            <button type='button' className='btn'>
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default SectionProduct
