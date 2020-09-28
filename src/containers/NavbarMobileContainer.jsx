import React from 'react'
import ReactDOM from 'react-dom'
import NavbarMobile from '../components/NavbarMobile'

function NavbarMobileContainer({ isOpen, className, closeNav }) {
  if (!isOpen) {
    return null
  }
  return (
    ReactDOM.createPortal(
      <NavbarMobile
        className={className}
        closeNav={closeNav}
      />
      , document.getElementById('Modal'),
    )
  )
}

export default NavbarMobileContainer
