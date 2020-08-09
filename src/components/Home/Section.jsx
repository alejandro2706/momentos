import React from 'react'
import '../../styles/components/Home/Section.sass'
import cake from '../../assets/images/brownie.svg'
import cookies from '../../assets/images/cookies.svg'
import cupcake from '../../assets/images/cupcake.svg'
import SectionProduct from './SectionProduct'

function Section() {
  return (
    <div className='Section'>
      <h2>Productos</h2>
      <p>Cada uno para un momento especial!</p>
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
