import React, { useState } from 'react'
import './Navbar.sass'
import BrandContainer from '../BrandContainer'
import NavbarList from '../NavbarList'

const NavbarMobileContainer = React.lazy(() => import('../../containers/NavbarMobileContainer'))

function Navbar() {

  const [transition, setTransition] = useState(null)
  const [openModal, setOpenModal] = useState({ navbar: false })

  const onOpenNav = () => {
    if (!openModal.navbar) {
      setOpenModal({ navbar: true })
      setTransition('is-active')
    } else {
      setOpenModal(false)
      setTransition('is-close')
    }
  }

  return (
    <div className='Navbar-container'>
      <BrandContainer />
      <nav className='Navbar'>
        <NavbarList />
      </nav>
      <div className='Navbar-container_tooltips'>
        <button type='button' className='menu' onClick={onOpenNav}>
          <div className={`menu-icon ${transition}`} />
        </button>
        <NavbarMobileContainer
          isOpen={openModal.navbar}
          className={transition}
          closeNav={onOpenNav}
        />
      </div>
    </div>
  )
}

export default Navbar
