import React from 'react'
import { Link } from 'react-router-dom'

const DropdownItem = ({ title, img, action, closeModal, className }) => {
  if (typeof (action) === 'function') {
    return (
      <button type='button' className={className} onClick={action}>
        <p>{title}</p>
        <div className={`${className}_img`}>
          <img src={img} alt='icon' />
        </div>
      </button>
    )
  }
  return (
    <Link to={action} onClick={closeModal}>
      <div className={className}>
        <p>{title}</p>
        <div className={`${className}_img`}>
          <img src={img} alt='icon' />
        </div>
      </div>
    </Link>
  )
}

export default DropdownItem
