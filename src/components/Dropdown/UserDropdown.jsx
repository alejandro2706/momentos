import React from 'react'
import '../../styles/components/Dropdown/UserDropdown.sass'
import DropdownItem from './DropdownItem'
import settingsIcon from '../../assets/icons/gear.svg'
import chartIcon from '../../assets/icons/chart.svg'
import logOutIcon from '../../assets/icons/log-out.svg'

const UserDropdown = ({ isActive, signOut, closeDropdown }) => {
  if (!isActive) {
    return null
  }
  return (
    <div className='UserDropdown'>
      <DropdownItem
        title='Settings'
        img={settingsIcon}
        action='/settings'
        closeModal={closeDropdown}
      />
      <DropdownItem
        title='Dashboard'
        img={chartIcon}
        action='/dashboard'
        closeModal={closeDropdown}
      />
      <DropdownItem
        title='Log Out'
        img={logOutIcon}
        action={() => signOut()}
      />
    </div>
  )
}

export default UserDropdown
