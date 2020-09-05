import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NavbarItem from '../NavbarItem'
import './NavbarMobile.sass'
import UserContext from '../../context'
import UserElement from '../UserElement'

function NavbarMobile({ className, closeNav, signOut }) {
  const user = useContext(UserContext)
  return (
    <div className={`Mobile ${className}`}>
      <div className='Mobile-user'>
        {user ? (
          <UserElement user={user} closeNav={closeNav} signOut={signOut} />
        ) : (
          <button type='button' className='notUser_button' onClick={closeNav}>
            <Link to='/auth'>
              Iniciar Sesión
            </Link>
          </button>
        )}
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
