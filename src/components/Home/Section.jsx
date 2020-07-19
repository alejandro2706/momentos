import React, { useState } from 'react'
import '../../styles/components/Section.sass'
import cake from '../../assets/images/brownie.svg'
import cookies from '../../assets/images/cookies.svg'
import cupcake from '../../assets/images/cupcake.svg'
import SectionProduct from './SectionProduct'

export default function Section() {
  const [className, setClassName] = useState('hidden')
  function handelAnimation() {
    if (document.documentElement.scrollTop > 330) {
      setClassName('visible')
      console.log('visible')
    } else {
      setClassName('hidden')
    }
  }
  window.onscroll = () => handelAnimation()
  return (
    <div className='Section'>
      <h2>Our Products</h2>
      <p>Each of them for a unique Present!</p>
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
