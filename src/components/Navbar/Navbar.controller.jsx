import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Toast } from '../../utils/SwalModals'
import '../../styles/components/Navbar/Navbar.sass'
import { app } from '../../db/config'
import UserContext from '../../context'
import cartIcon from '../../assets/icons/shopping-cart.svg'
import userIcon from '../../assets/icons/user-default.svg'
import CartContainer from '../../containers/CartContainer'
import BrandContainer from './BrandContainer'
import UserDropdown from '../Dropdown/UserDropdown'
import NavbarMobileContainer from '../../containers/NavbarMobileContainer'
import NavbarList from './NavbarList'

function Navbar() {
  const user = useContext(UserContext)
  const [transition, setTransition] = useState(null)
  const [openModal, setOpenModal] = useState({ cart: false, navbar: false, dropdown: false })

  const onOpenCart = () => {
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

  const onOpenNav = () => {
    if (!openModal.navbar) {
      setOpenModal({ navbar: true })
      setTransition('is-active')
    } else {
      setOpenModal(false)
      setTransition('is-close')
    }
  }

  const onOpenDropdown = () => {
    if (!openModal.dropdown) {
      setOpenModal({ dropdown: true })
    } else {
      setOpenModal({ dropdown: false })
    }
  }

  const signOut = () => {
    if (user) {
      app.auth().signOut()
        .then(Toast.fire({
          icon: 'success',
          title: 'Saliste',
        }))
      window.location.reload(true)
    }
  }
  return (
    <div className='Navbar-container'>
      <BrandContainer />
      <nav className='Navbar'>
        <NavbarList />
      </nav>
      <div className='Navbar-container_tooltips'>
        <button type='button' onClick={() => onOpenCart()} className='cart'>
          <img src={cartIcon} alt='Cart icon' />
        </button>
        <CartContainer
          isOpen={openModal.cart}
          className={transition}
        />
        {user && (
          <>
            <button type='button' className='isUser' onClick={() => onOpenDropdown()}>
              <img src={user.photoURL || userIcon} alt='user' />
            </button>
            <UserDropdown
              user={user}
              isActive={openModal.dropdown}
              signOut={signOut}
              closeDropdown={onOpenDropdown}
            />
          </>
        )}
        {!user && (
          <button type='button' className='signIn'>
            <Link to='/auth'>
              Iniciar Sesión
            </Link>
          </button>
        )}
        <button type='button' className='menu' onClick={onOpenNav}>
          <div className={`menu-icon ${transition}`} />
        </button>
        <NavbarMobileContainer
          isOpen={openModal.navbar}
          className={transition}
          closeNav={onOpenNav}
          signOut={signOut}
        />
      </div>
    </div>
  )
}

export default Navbar
