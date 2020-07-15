import React from 'react'
import '../../styles/components/Section.sass'
import cake from '../../assets/images/product.png'
import cookies from '../../assets/images/galletas.png'
import SectionProduct from './SectionProduct'

const Section = () => {
  return (
    <div className='Section'>
      <h2>Our Products</h2>
      <p>Each of them for a unique Present!</p>
      <SectionProduct
        image={cake}
        title='Cupcakes'
      />
      <SectionProduct
        image={cookies}
        title='Cookies'
      />
    </div>
  )
}

export default Section
