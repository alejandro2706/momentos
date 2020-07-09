import React from 'react'
import '../styles/components/Navbar.sass'
import cartIcon from '../assets/icons/cart.svg'

const Navbar = () => {
  return (
    <div className='Navbar-container'>
      <div className='Navbar-container_brand'>
        <a href='/'><h1>Momentos</h1></a>
      </div>
      <nav className='Navbar'>
        <ul className='Navbar-list'>
          <li className='Navbar-list_item'>
            <a href='#'>
              Contact
            </a>
          </li>
          <li className='Navbar-list_item'>
            <a href='#'>
              Products
            </a>
          </li>
          <li className='Navbar-list_item'>
            <a href='#'>
              IDK
            </a>
          </li>
        </ul>
      </nav>
      <div className='Navbar-container_tooltips'>
        <button type='button' className='cart'>
          <img src={cartIcon} alt='Cart icon' />
        </button>
        <button type='button' className='signIn'>Ingresar</button>
      </div>
    </div>
  )
}

export default Navbar
