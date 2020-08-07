import React from 'react'
import ReactDOM from 'react-dom'
import NavbarMobile from '../components/Navbar/NavbarMobile'

function NavbarMobileContainer({ isOpen, className, closeNav, signOut }) {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <NavbarMobile
        className={className}
        closeNav={closeNav}
        signOut={signOut}
      />
      , document.getElementById('Modal'),
    )
  )
}

export default NavbarMobileContainer
