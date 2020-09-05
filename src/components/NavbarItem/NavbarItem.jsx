import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarItem.sass'

function NavbarItem({ title, route, className, closeModal }) {
  return (
    <li className={className}>
      <NavLink to={`/${route}`} activeClassName='navbar-active'>
        <button type='button' onClick={closeModal}>
          {title}
        </button>
      </NavLink>
    </li>
  )
}
export default NavbarItem
