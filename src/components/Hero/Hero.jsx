import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.sass'

const Hero = () => {
  const [className, setClassName] = useState()

  return (
    <div className='Hero'>
      <div className='Hero-description'>
        <h1>
          Encuentra tu
          <span>Momento</span>
          especial
        </h1>
        <div className='Hero-description_buttons'>
          <Link to='/products'>
            <button
              type='button'
              className={className}
              onMouseEnter={() => setClassName('increase')}
              onMouseLeave={() => setClassName('decrease')}
            >
              Descubre
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
