import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Navbar/NavbarItem.sass'

const NavbarItem = ({ title, route, className, closeModal }) => (
  <li className={className}>
    <Link to={`/${route}`}>
      <button type='button' onClick={closeModal}>
        {title}
      </button>
    </Link>
  </li>
)

export default NavbarItem
