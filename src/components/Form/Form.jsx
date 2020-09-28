import React, { useState, useRef } from 'react'
import './Form.sass'
import { createForm } from '../../db/formController'
import Input from '../Input'

function Form() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const emailFormRef = useRef(null)

  const onSubmitForm = (e) => {
    e.preventDefault()
    const formState = {
      name,
      phone,
      surname,
      email,
      message,
    }
    createForm(formState)
    setName('')
    setPhone('')
    setSurname('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className='Contact-container'>
      <form onSubmit={onSubmitForm}>
        <Input
          className='Contact-container_label'
          name='name'
          type='text'
          labelFor='Name'
          title='nombre'
          required
          value={name}
          onchange={(e) => setName(e.target.value)}
        />
        <Input
          className='Contact-container_label'
          name='surname'
          type='text'
          labelFor='surname'
          title='Apellido'
          value={surname}
          onchange={(e) => setSurname(e.target.value)}
        />
        <Input
          className='Contact-container_label'
          name='email'
          type='Email'
          labelFor='email'
          title='Correo Electrónico'
          reference={emailFormRef}
          required
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <Input
          className='Contact-container_label'
          name='phone'
          type='number'
          labelFor='number'
          title='Teléfono'
          value={phone}
          onchange={(e) => setPhone(e.target.value)}
        />
        <textarea
          name='message'
          placeholder='Escribe tu mensaje...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Form
