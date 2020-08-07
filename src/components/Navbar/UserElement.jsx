import React from 'react'
import { Link } from 'react-router-dom'
import userDefaultIcon from '../../assets/icons/user-default.svg'
import gearIcon from '../../assets/icons/gear.svg'
import chartIcon from '../../assets/icons/chart.svg'
import logOutIcon from '../../assets/icons/log-out.svg'
import DropdownItem from '../Dropdown/DropdownItem'

function UserElement({ user, closeNav, signOut }) {
  if (!user) {
    return (
      <button type='button' className='notUser_button' onClick={closeNav}>
        <Link to='/auth'>
          Iniciar Sesión
        </Link>
      </button>
    )
  }
  return (
    <div className='isUser'>
      <div className='isUser-image'>
        <img src={user.photoURl || userDefaultIcon} alt='user' />
      </div>
      <div className='isUser-name'>
        <p>
          {user.displayName}
        </p>
      </div>
      <div className='isUser-actions'>
        <DropdownItem
          className='isUser-actions_item'
          title='Settings'
          img={gearIcon}
          action='/'
          closeModal={closeNav}
        />
        <DropdownItem
          className='isUser-actions_item'
          title='Dashboard'
          img={chartIcon}
          action='/'
          closeModal={closeNav}
        />
        <DropdownItem
          className='isUser-actions_item'
          title='Log Out'
          img={logOutIcon}
          action={() => signOut()}
          closeModal={closeNav}
        />
      </div>
    </div>
  )
}

export default UserElement
