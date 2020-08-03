import React, { useState, useEffect, useRef } from 'react'
import '../../styles/components/Home/Section.sass'
import cake from '../../assets/images/brownie.svg'
import cookies from '../../assets/images/cookies.svg'
import cupcake from '../../assets/images/cupcake.svg'
import SectionProduct from './SectionProduct'

function Section() {
  const productRef = useRef(null)
  const [className, setClassName] = useState('hidden')
  function handelAnimation() {
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
      <h2>Our Products</h2>
      <p>Each of them for a unique Present!</p>
      <div className='Section-grid'>
        <SectionProduct
          image={cupcake}
          title='Galletas'
          productClass={className}
          reference={productRef}
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
