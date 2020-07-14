import React from 'react'
import '../styles/components/Section.sass'

const Section = () => {
  return (
    <div className='Section'>
      <h2>Our Products</h2>
      <p>Each of them for a unique Present!</p>
      <div className='Section-products'>
        <div className='Section-products_image'>
          <img src='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='product1' />
        </div>
        <div className='Section-products_desc'>
          <h3>Product title</h3>
          <p>A little description about this Product</p>
        </div>
      </div>
      <div className='Section-products' />
    </div>
  )
}

export default Section
