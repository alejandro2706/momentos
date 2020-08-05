import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import cartIcon from '../../assets/icons/cart.svg'
import userIcon from '../../assets/icons/user-default.svg'
import Cart from '../Cart/CartContainer'
import NavbarItem from './NavbarItem'
import NavbarMobile from './NavbarMobile'
import { app } from '../../db/config'
import BrandContainer from './BrandContainer'
import UserDropdown from './UserDropdown'

import('../../styles/components/Navbar/Navbar.sass')

function Navbar() {
  const [user, setUser] = useState(null)
  const [transition, setTransition] = useState(null)
  const [openModal, setOpenModal] = useState({ cart: false, navbar: false, dropdown: false })

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) setUser(user)
      else console.log('no hay usuario')
    })
  })

  function onOpenCart() {
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
      setOpenModal({ navbar: true })
      setTransition('is-open')
    } else {
      setOpenModal(false)
    }
  }

  function onOpenDropdown() {
    if (!openModal.dropdown) {
      setOpenModal({ dropdown: true })
      setTransition('is-open')
    } else {
      setOpenModal(false)
    }
  }

  function signOut() {
    if (user) {
      app.auth().signOut()
        .then(Swal.fire({
          title: 'Saliste',
          showConfirmButton: false,
          timer: 500,
        }))
      window.location.reload(true)
    }
  }
  return (
    <div className='Navbar-container'>
      <BrandContainer />
      <nav className='Navbar'>
        <ul className='Navbar-list'>
          <NavbarItem
            title='Nosotros'
            route='about'
            className='Navbar-list_item'
          />
          <NavbarItem
            title='Productos'
            route='products'
            className='Navbar-list_item'
          />
          <NavbarItem
            title='Contacto'
            route='contact'
            className='Navbar-list_item'
          />
        </ul>
      </nav>
      <div className='Navbar-container_tooltips'>
        <button type='button' onClick={() => onOpenCart()} className='cart'>
          <img src={cartIcon} alt='Cart icon' />
        </button>
        <Cart
          isOpen={openModal.cart}
          className={transition}
        />
        {user && (
          <>
            <button type='button' className='isUser' onClick={() => onOpenDropdown()}>
              <img src={user.photoURL || userIcon} alt='user' />
            </button>
            <UserDropdown user={user} isActive={openModal.dropdown} signOut={signOut} closeDropdown={onOpenDropdown} />
          </>
        )}
        {!user && (
          <button type='button' className='signIn'>
            <Link to='/auth'>
              Iniciar Sesión
            </Link>
          </button>
        )}
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
