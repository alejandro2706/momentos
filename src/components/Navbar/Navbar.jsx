import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Navbar/Navbar.sass'
import cartIcon from '../../assets/icons/cart.svg'
import Cart from '../Cart/CartContainer'
import NavbarItem from './NavbarItem'
import { app } from '../../db/config'
import BrandContainer from './BrandContainer'

function Navbar() {
  const [user, setUser] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [transition, setTransition] = useState(null)
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) setUser(user.displayName)
      else console.log('no hay usuario')
    })
  })
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
      <BrandContainer />
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
            {user && 'cerrar Sesión'}
            {!user && 'iniciar Sesión'}
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar
