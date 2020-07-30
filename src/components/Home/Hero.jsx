import React from 'react'
import '../../styles/components/Home/Hero.sass'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Hero-description'>
        <h1>
          Encuentra tu
          <span>Momento</span>
          especial
        </h1>
        <div className='Hero-description_buttons'>
          <button type='button' className='btn'>
            <Link to='/products'>Descubre</Link>
          </button>
          <button type='button' className='btn-alt'>
            <Link to='/auth'>Inicia Sesión</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
