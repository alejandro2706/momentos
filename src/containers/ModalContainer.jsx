import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../components/Modal/Modal'

function ModalContainer({ isOpen, closeModal, product }) {
  if (!isOpen) return null
  return (
    ReactDOM.createPortal(
      <>
        <div className='overlay' />
        <Modal closeModal={() => closeModal(false)} product={product} />
      </>,
      document.getElementById('Modal'),
    )
  )
}

export default ModalContainer
