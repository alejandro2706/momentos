import React from 'react'
import '../../styles/components/Hero.sass'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='Hero-description'>
        <h1>
          Find your special
          {' '}
          <span>Moment</span>
        </h1>
        <button type='button' className='btn'>Start here</button>
      </div>
    </div>
  )
}

export default Hero
