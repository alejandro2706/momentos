import React, { useContext } from 'react'
import NavbarItem from './NavbarItem'
import '../../styles/components/Navbar/NavbarMobile.sass'
import UserContext from '../../context'
import UserElement from './UserElement'

function NavbarMobile({ className, closeNav, signOut }) {
  const user = useContext(UserContext)
  return (
    <div className={`Mobile ${className}`}>
      <div className='Mobile-user'>
        <UserElement user={user} closeNav={closeNav} signOut={signOut} />
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
