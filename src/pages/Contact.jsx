import React, { useState, useRef } from 'react'
import Swal from 'sweetalert2'
import Input from '../components/auth/Input'
import '../styles/components/Contact.sass'
import formController from '../db/formController'

function Contact() {
  const [formState, setFormState] = useState(undefined)
  const emailFormRef = useRef(null)
  function onChangeForm(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  function onSubmitForm(e) {
    e.preventDefault()
    if (formState) {
      if (emailFormRef.current.validationMessage === '') {
        return formController.createForm(formState)
      }
      return Swal.fire({
        title: 'Correo invalido',
        text: emailFormRef.current.validationMessage,
      })
    }
    return Swal.fire('Llena los campos')
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
            reference={emailFormRef}
          />
          <Input
            className='Contact-container_label'
            name='phone'
            type='number'
            labelFor='number'
            title='Teléfono'
          />
          <textarea name='message' placeholder='Escribe tu mensaje...' />
          <button type='submit' onClick={onSubmitForm}>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
