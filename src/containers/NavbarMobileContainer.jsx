import React from 'react'
import ReactDOM from 'react-dom'
import NavbarMobile from '../components/Navbar/NavbarMobile'

function NavbarMobileContainer({ isOpen, className, closeNav }) {
  return (
    ReactDOM.createPortal(
      <NavbarMobile
        isOpen={isOpen}
        className={className}
        closeNav={closeNav}
      />
      , document.getElementById('Modal'),
    )
  )
}

export default NavbarMobileContainer
