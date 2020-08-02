import React, { useState } from 'react'
import '../../styles/components/auth/SignIn.sass'
import Swal from 'sweetalert2'
import facebook from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google-icon.svg'
import Input from './Input'
import auth from '../../db/authController'

function SignIn({ title, register }) {
  const [form, setForm] = useState(null)
  function handleFormChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  function onSubmitForm(e) {
    e.preventDefault()
    if (form !== null) {
      if (register) {
        if (form.name === undefined) {
          return Swal.fire('Por favor ingresa tu nombre')
        }
        return auth.signUpEmailPass(form)
      }
      return auth.signInEmailPass(form)
    }
    return Swal.fire('Llena los campos')
  }

  return (
    <>
      <h3>{title}</h3>
      <div className='SignIn-form'>
        <form onChange={handleFormChange}>
          {register === true && (
            <Input
              className='SignIn-form_label'
              name='name'
              type='text'
              title='nombre'
            />
          )}
          <Input
            className='SignIn-form_label'
            name='email'
            type='Email'
            title='Correo'
          />
          <Input
            className='SignIn-form_label'
            name='password'
            type='password'
            title='Contraseña'
          />
          <button type='submit' onClick={onSubmitForm}>{title}</button>
        </form>
      </div>
      <hr className='hr_sigin' />
      <h4>{`${title} con:`}</h4>
      <div className='SignIn-social'>
        <button type='button' onClick={() => auth.authWithGoogle()}>
          <img src={google} alt='Google' />
        </button>
        <button type='button' onClick={() => auth.authWithFacebook()}>
          <img src={facebook} alt='Facebook' />
        </button>
      </div>
    </>
  )
}

export default SignIn
