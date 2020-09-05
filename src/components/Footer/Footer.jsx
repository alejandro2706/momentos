import React from 'react'
import './Footer.sass'
import logo from '../../assets/brand/white-logo.png'
import Social from '../Social'
import GetInTouch from '../GetInTouch'

function Footer() {
  return (
    <div className='Footer'>
      <div className='Footer-main'>
        <img src={logo} alt='logo' />
      </div>
      <GetInTouch />
      <Social />
    </div>
  )
}

export default Footer
