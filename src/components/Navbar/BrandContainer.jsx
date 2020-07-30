import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/brand/cupcake-logo.png'

const BrandContainer = () => (
  <div className='Navbar-container_brand'>
    <Link to='/'>
      <img src={logo} alt='logo' />
      <span>Momentos</span>
    </Link>
  </div>
)

export default BrandContainer
