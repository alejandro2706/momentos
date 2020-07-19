import React from 'react'
import '../../styles/components/Home/Hero.sass'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Hero-description'>
        <h1>
          Find your special
          {' '}
          <span>Moment</span>
        </h1>
        <button type='button' className='btn'>
          <Link to='/products'>Start Here</Link>
          {' '}
        </button>
      </div>
    </div>
  )
}

export default Hero
