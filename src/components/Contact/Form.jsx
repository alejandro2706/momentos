import React, { useState, useRef } from 'react'
import '../../styles/components/Contact/Form.sass'
import formController from '../../db/formController'
import { SwalWithNoButton } from '../../utils/SwalModals'
import Input from '../Session/Input'

function Form() {
  const [formState, setFormState] = useState(undefined)
  const emailFormRef = useRef(null)

  const onChangeForm = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (formState) {
      if (!emailFormRef.current.validationMessage) {
        return formController.createForm(formState)
      }
      return SwalWithNoButton.fire({
        title: 'Correo invalido',
        text: emailFormRef.current.validationMessage,
      })
    }
    return SwalWithNoButton.fire('Llena los campos')
  }
  return (
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
  )
}

export default Form
