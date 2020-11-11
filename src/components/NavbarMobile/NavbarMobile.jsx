import React from 'react'
import NavbarItem from '../NavbarItem'
import './NavbarMobile.sass'

function NavbarMobile({ className, closeNav }) {

  return (
    <div className={`Mobile ${className}`}>
      <ul className='Mobile-list'>
        <NavbarItem
          title='Nosotros'
          route='about'
          className='Mobile-list_item'
          closeModal={closeNav}
        />
        <NavbarItem
          title='Contáctanos'
          route='contact'
          className='Mobile-list_item'
          closeModal={closeNav}
        />
      </ul>
    </div>
  )
}

export default NavbarMobile
