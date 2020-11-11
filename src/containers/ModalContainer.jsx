import React from 'react'
import ReactDOM from 'react-dom'

function ModalContainer({ isOpen, children, closeModal }) {
  if (!isOpen) return null
  return (
    ReactDOM.createPortal(
      <>
        <div className='overlay' onClick={closeModal} role='presentation' />
        {children}
      </>,
      document.getElementById('Modal'),
    )
  )
}

export default ModalContainer
