import React from 'react'
import '../../styles/components/SectionProduct.sass'

const SectionProduct = ({ image, title }) => (
  <div className='Section-products'>
    <div className='Section-products_grid'>
      <div className='Section-products_desc'>
        <h3>{title}</h3>
        <p>Cada producto puede ser modificado a gusto por el usuario, Contiene un sin fín de sabores únicos y espectaculares que van acorde al feeling de la marca</p>
      </div>
      <div className='Section-products_image'>
        {/* TODO: change layout */}
        <img src={image} alt='product1' />
      </div>
    </div>
    <div className='Section-products_button'>
      <button type='button' className='btn'>View More</button>
    </div>
  </div>
)

export default SectionProduct
