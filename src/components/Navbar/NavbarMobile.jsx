import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import NavbarItem from './NavbarItem'
import '../../styles/components/Navbar/NavbarMobile.sass'

function NavbarMobile({ isOpen, className, closeNav }) {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <div className={`Mobile ${className}`}>
        <div className='Mobile-user'>
          <button type='button' className='btn signIn'>
            <Link to='/auth'>
              Iniciar Sesión
            </Link>
          </button>
        </div>
        <ul className='Mobile-list'>
          <NavbarItem
            title='About'
            route='about'
            className='Mobile-list_item'
            closeModal={closeNav}
          />
          <NavbarItem
            title='Contact'
            route='contact'
            className='Mobile-list_item'
            closeModal={closeNav}
          />
          <NavbarItem
            title='Products'
            route='products'
            className='Mobile-list_item'
            closeModal={closeNav}
          />
        </ul>
      </div>
      , document.getElementById('Modal'),
    )
  )
}

export default NavbarMobile
