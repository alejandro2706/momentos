import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Navbar/NavbarItem.sass'

const NavbarItem = ({ title, route, className }) => (
  <li className={className}>
    <Link to={`/${route}`}>
      {title}
    </Link>
  </li>
)

export default NavbarItem
