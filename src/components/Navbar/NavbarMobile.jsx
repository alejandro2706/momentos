import React from 'react'
import { Link } from 'react-router-dom'
import NavbarItem from './NavbarItem'
import '../../styles/components/Navbar/NavbarMobile.sass'

function NavbarMobile({ className, closeNav }) {
  return (
    <div className={`Mobile ${className}`}>
      <div className='Mobile-user'>
        <button type='button' className='btn signIn' onClick={closeNav}>
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
  )
}

export default NavbarMobile
