import React, { useState } from 'react'
import '../../styles/components/auth/SignIn.sass'
import { SwalWithNoButton } from '../../utils/SwalModals'
import facebook from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google-icon.svg'
import Input from './Input'
import { signUpEmailPass, signInEmailPass, authWithGoogle, authWithFacebook } from '../../db/authController'

function SignIn({ title, register }) {
  const [form, setForm] = useState(null)
  const onFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const onSubmitForm = (e) => {
    e.preventDefault()
    if (form) {
      if (register) {
        if (!form.name) {
          return SwalWithNoButton.fire('Por favor ingresa tu nombre')
        }
        return signUpEmailPass(form)
      }
      return signInEmailPass(form)
    }
    return SwalWithNoButton.fire('Llena los campos')
  }

  return (
    <>
      <h3>{title}</h3>
      <div className='SignIn-form'>
        <form onChange={onFormChange}>
          {register && (
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
        <button type='button' onClick={() => authWithGoogle()}>
          <img src={google} alt='Google' />
        </button>
        <button type='button' onClick={() => authWithFacebook()}>
          <img src={facebook} alt='Facebook' />
        </button>
      </div>
    </>
  )
}

export default SignIn
