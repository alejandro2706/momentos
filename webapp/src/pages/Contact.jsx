import React from 'react'
import Input from '../components/auth/Input'
import '../styles/components/Contact.sass'

function Contact() {
  return (
    <div className='Contact'>
      <h2>Contact us</h2>
      <div className='Contact-container'>
        <form action=''>
          <Input
            className='Contact-container_label'
            name='Nombre'
            type='text'
            labelFor='Name'
          />
          <Input
            className='Contact-container_label'
            name='Apellido'
            type='text'
            labelFor='surname'
          />
          <Input
            className='Contact-container_label'
            name='Email'
            type='email'
            labelFor='email'
          />
          <Input
            className='Contact-container_label'
            name='Teléfono'
            type='number'
            labelFor='number'
          />
          <textarea name='message' placeholder='Escribe tu mensaje...' />
          <button type='button'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
