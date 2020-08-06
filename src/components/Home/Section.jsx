import React, { useState, useEffect } from 'react'
import '../../styles/components/Home/Section.sass'
import cake from '../../assets/images/brownie.svg'
import cookies from '../../assets/images/cookies.svg'
import cupcake from '../../assets/images/cupcake.svg'
import SectionProduct from './SectionProduct'

function Section() {
  const [className, setClassName] = useState('hidden')

  const handelAnimation = () => {
    if (document.documentElement.scrollTop > 325) {
      setClassName('visible')
    }
  }
  useEffect(() => {
    window.onscroll = () => handelAnimation()
    return () => window.onscroll = null
  })

  return (
    <div className='Section'>
      <h2>Productos</h2>
      <p>Cada uno para un momento especial!</p>
      <div className='Section-grid'>
        <SectionProduct
          image={cupcake}
          title='Galletas'
          productClass={className}
        />
        <SectionProduct
          image={cookies}
          title='Cupcakes'
          productClass={className}
        />
        <SectionProduct
          image={cake}
          title='Brownies'
          productClass={className}
        />
        <SectionProduct
          image={cupcake}
          title='Antojos'
          productClass={className}
        />
        <SectionProduct
          image={cake}
          title='Brownies'
          productClass={className}
        />
        <SectionProduct
          image={cookies}
          title='Brownies'
          productClass={className}
        />
      </div>
    </div>
  )
}

export default Section
