import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Navbar.sass'
import cartIcon from '../assets/icons/cart.svg'

const Navbar = () => {
  return (
    <div className='Navbar-container'>
      <div className='Navbar-container_brand'>
        <Link to='/'><h1>Momentos</h1></Link>
      </div>
      <nav className='Navbar'>
        <ul className='Navbar-list'>
          <li className='Navbar-list_item'>
            <Link to='/contact'>
              About
            </Link>
          </li>
          <li className='Navbar-list_item'>
            <Link to='/Products'>
              Products
            </Link>
          </li>
          <li className='Navbar-list_item'>
            <Link to='/'>
              IDK
            </Link>
          </li>
        </ul>
      </nav>
      <div className='Navbar-container_tooltips'>
        <button type='button' className='cart'>
          <img src={cartIcon} alt='Cart icon' />
        </button>
        <button type='button' className='btn signIn'>Ingresar</button>
      </div>
    </div>
  )
}

export default Navbar
