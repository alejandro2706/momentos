import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Hero.sass'
import UserContext from '../../context'

const Hero = () => {
  const user = useContext(UserContext)
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
          {!user && (
            <button type='button' className='btn-alt'>
              <Link to='/auth'>Inicia Sesión</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
