import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Navbar/Navbar.sass'
import cartIcon from '../../assets/icons/cart.svg'
import logo from '../../assets/brand/cupcake-logo.png'
import Cart from '../Cart/CartContainer'
import NavbarItem from './NavbarItem'

function Navbar() {
  const [openModal, setOpenModal] = useState(false)
  const [transition, setTransition] = useState(null)
  function openCart() {
    if (!openModal) {
      setOpenModal(true)
      setTransition('is-open')
    } else {
      setTimeout(() => {
        setOpenModal(false)
      }, 450);
      setTransition('is-closing')
    }
  }
  return (
    <div className='Navbar-container'>
      <div className='Navbar-container_brand'>
        <Link to='/'>
          <img src={logo} alt='logo' />
          <span>Momentos</span>
        </Link>
      </div>
      <nav className='Navbar'>
        <ul className='Navbar-list'>
          <NavbarItem
            title='About'
            route='about'
          />
          <NavbarItem
            title='Products'
            route='products'
          />
          <NavbarItem
            title='Contact'
            route='contact'
          />
        </ul>
      </nav>
      <div className='Navbar-container_tooltips'>
        <button type='button' onClick={openCart} className='cart'>
          <img src={cartIcon} alt='Cart icon' />
        </button>
        <Cart
          isOpen={openModal}
          className={transition}
        />
        <button type='button' className='btn signIn'>
          <Link to='/auth'>
            Iniciar Sesión
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar
