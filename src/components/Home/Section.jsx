import React from 'react'
import '../../styles/components/Section.sass'
import cake from '../../assets/images/brownie.svg'
import cookies from '../../assets/images/cookies.svg'
import cupcake from '../../assets/images/cupcake.svg'
import SectionProduct from './SectionProduct'

const Section = () => {
  return (
    <div className='Section'>
      <h2>Our Products</h2>
      <p>Each of them for a unique Present!</p>
      <div className='Section-grid'>
        <SectionProduct
          image={cupcake}
          title='Galletas'
        />
        <SectionProduct
          image={cookies}
          title='Cupcakes'
        />
        <SectionProduct
          image={cake}
          title='Brownies'
        />
        <SectionProduct
          image={cupcake}
          title='Antojos'
        />
        <SectionProduct
          image={cake}
          title='Brownies'
        />
        <SectionProduct
          image={cookies}
          title='Brownies'
        />
      </div>
    </div>
  )
}

export default Section
