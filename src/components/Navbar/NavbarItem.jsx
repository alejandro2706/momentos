import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Navbar/NavbarItem.sass'

const NavbarItem = ({ title, route }) => (
  <li className='Navbar-list_item'>
    <Link to={`/${route}`}>
      {title}
    </Link>
  </li>
)

export default NavbarItem
