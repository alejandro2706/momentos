import React from 'react'
import ReactDOM from 'react-dom'
import NavbarItem from './NavbarItem'
import '../../styles/components/Navbar/NavbarMobile.sass'

function NavbarMobile({ isOpen, className }) {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <div className={`Mobile-list ${className}`}>
        <div className='Mobile-brand'>
          <img src='' alt='brand ' />
        </div>
        <ul>
          <NavbarItem
            title='About'
            route='about'
            className='Mobile-list_item'
          />
          <NavbarItem
            title='Contact'
            route='contact'
            className='Mobile-list_item'
          />
          <NavbarItem
            title='Products'
            route='products'
            className='Mobile-list_item'
          />
        </ul>
      </div>
      , document.getElementById('Modal'),
    )
  )
}

export default NavbarMobile
