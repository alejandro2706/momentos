import React from 'react'
import '../../styles/components/Footer/Footer.sass'
import logo from '../../assets/brand/white-logo.png'
import Social from './Social'
import GetInTouch from './GetInTouch'

const Footer = () => {
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
