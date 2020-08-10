import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/components/Navbar/NavbarItem.sass'

const NavbarItem = ({ title, route, className, closeModal }) => (
  <li className={className}>
    <NavLink to={`/${route}`} activeClassName='navbar-active'>
      <button type='button' onClick={closeModal}>
        {title}
      </button>
    </NavLink>
  </li>
)

export default NavbarItem
