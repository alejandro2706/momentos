import React, { useState } from 'react'
import Input from '../components/auth/Input'
import '../styles/components/Contact.sass'
import formController from '../db/formController'

function Contact() {
  const [formState, setFormState] = useState(undefined)
  function onChangeForm(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  function onSubmitForm(e) {
    e.preventDefault()
    if (formState) {
      formController.createForm(formState)
    }
  }
  return (
    <div className='Contact'>
      <h2>Contact us</h2>
      <div className='Contact-container'>
        <form onChange={onChangeForm}>
          <Input
            className='Contact-container_label'
            name='name'
            type='text'
            labelFor='Name'
            title='nombre'
          />
          <Input
            className='Contact-container_label'
            name='surname'
            type='text'
            labelFor='surname'
            title='Apellido'
          />
          <Input
            className='Contact-container_label'
            name='email'
            type='Email'
            labelFor='email'
            title='Correo Electrónico'
          />
          <Input
            className='Contact-container_label'
            name='phone'
            type='number'
            labelFor='number'
            title='Telefono'
          />
          <textarea name='message' placeholder='Escribe tu mensaje...' />
          <button type='submit' onClick={onSubmitForm}>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
