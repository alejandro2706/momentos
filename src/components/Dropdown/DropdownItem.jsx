import React from 'react'
import '../../styles/components/Dropdown/DropdownItem.sass'
import { Link } from 'react-router-dom'

const DropdownItem = ({ title, img, action, closeModal }) => {
  if (typeof (action) === 'function') {
    return (
      <button type='button' onClick={action}>
        <div className='UserDropdown-actions'>
          <p>{title}</p>
          <div className='UserDropdown-actions_img'>
            <img src={img} alt='icon' />
          </div>
        </div>
      </button>
    )
  }
  return (
    <button type='button' onClick={closeModal}>
      <Link to={action}>
        <div className='UserDropdown-actions'>
          <p>{title}</p>
          <div className='UserDropdown-actions_img'>
            <img src={img} alt='icon' />
          </div>
        </div>
      </Link>
    </button>
  )
}

export default DropdownItem
