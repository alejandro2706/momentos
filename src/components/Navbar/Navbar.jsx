import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Navbar/Navbar.sass'
import cartIcon from '../../assets/icons/cart.svg'
import logo from '../../assets/brand/cupcake-logo.png'
import Cart from '../Cart/CartContainer'
import NavbarItem from './NavbarItem'
import NavbarMobile from './NavbarMobile'

function Navbar() {
  const [openModal, setOpenModal] = useState({
    cart: false,
    navbar: false,
  })
  const [transition, setTransition] = useState(null)
  function handleOpen() {
    if (!openModal.cart) {
      setOpenModal({ cart: true })
      setTransition('is-open')
    } else {
      setTimeout(() => {
        setOpenModal(false)
      }, 450);
      setTransition('is-closing')
    }
  }

  function onOpenNav() {
    if (!openModal.navbar) {
      setOpenModal({ navbar: { open: true, transition: 'is-open' } })
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
            className='Navbar-list_item'
            onClick={() => setOpenModal({ navbar: false })}
          />
          <NavbarItem
            title='Products'
            route='products'
            className='Navbar-list_item'
          />
          <NavbarItem
            title='Contact'
            route='contact'
            className='Navbar-list_item'
          />
        </ul>
      </nav>
      <div className='Navbar-container_tooltips'>
        <button type='button' onClick={() => handleOpen()} className='cart'>
          <img src={cartIcon} alt='Cart icon' />
        </button>
        <Cart
          isOpen={openModal.cart}
          className={transition}
        />
        <button type='button' className='btn signIn'>
          <Link to='/auth'>
            <p>Iniciar Sesión</p>
          </Link>
        </button>
        <button type='button' className='menu' onClick={onOpenNav}>
          <div className='menu-icon' />
        </button>
        <NavbarMobile
          isOpen={openModal.navbar}
          className={transition}
          closeNav={onOpenNav}
        />
      </div>
    </div>
  )
}

export default Navbar
