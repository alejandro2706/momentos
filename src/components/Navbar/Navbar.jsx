import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Navbar/Navbar.sass'
import Swal from 'sweetalert2'
import cartIcon from '../../assets/icons/cart.svg'
import Cart from '../Cart/CartContainer'
import NavbarItem from './NavbarItem'
import NavbarMobile from './NavbarMobile'
import { app } from '../../db/config'
import BrandContainer from './BrandContainer'

function Navbar() {
  const [user, setUser] = useState(null)
  const [transition, setTransition] = useState(null)
  const [openModal, setOpenModal] = useState({
    cart: false,
    navbar: false,
  })

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) setUser(user.displayName)
      else console.log('no hay usuario')
    })
  })

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
      setOpenModal(false)
    }
  }

  function signOut() {
    if (user) {
      console.log(user)
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
            title='About'
            route='about'
            className='Navbar-list_item'
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
        {user && (
          <button type='button' className='btn signIn' onClick={signOut}>
            {/* <Link to='/user'> */}
            {user}
            {/* </Link> */}
          </button>
        )}
        {!user && (
          <button type='button' className='btn signIn'>
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
