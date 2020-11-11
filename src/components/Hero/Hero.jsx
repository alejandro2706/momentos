import React, { useState } from 'react'
import './Hero.sass'

const Hero = () => {
  const [className, setClassName] = useState()
  function handleScroll() {
    window.scrollBy({
      behavior: 'smooth',
      top: window.innerHeight - 100,
    })
  }

  return (
    <div className='Hero'>
      <div className='Hero-description'>
        <h1>
          Encuentra tu
          <span>Momento</span>
          especial
        </h1>
        <div className='Hero-description_buttons'>
          <button
            type='button'
            className={className}
            onMouseEnter={() => setClassName('increase')}
            onMouseLeave={() => setClassName('decrease')}
            onClick={handleScroll}
          >
            Descubre
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
