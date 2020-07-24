import React, { useState } from 'react'
import '../../styles/components/auth/SignIn.sass'
import swal from 'sweetalert'
import facebook from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google-icon.svg'
import Input from './Input'
import { signUpEmailPass, signInEmailPass } from '../../db/Controller'

function SignIn({ title, register }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  function handleSubmit(e) {
    e.preventDefault()
    if (form.password.length < 6) {
      swal({
        text: 'Tu contraseña debe ser mayor a 6 caracteres',
        timer: 2000,
        buttons: false,
      })
      return false
    }
    console.log(form)
    if (register) {
      console.log('register:', register)
      return signUpEmailPass(form)
    }
    return signInEmailPass(form)
  }
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <div>
      <h3>{title}</h3>
      <div className='SignIn-form'>
        <form action='post' onChange={handleChange}>
          {register === true && (
            <Input
              className='SignIn-form_label'
              name='name'
              type='text'
              // onChange={handleChange}
              // value={state.name}
            />
          )}
          <Input
            className='SignIn-form_label'
            name='email'
            type='email'
            // onChange={handleChange}
            // value={state.email}
          />
          <Input
            className='SignIn-form_label'
            name='password'
            type='password'
            // onChange={handleChange}
            // value={state.password}
          />
          <button type='submit' onClick={handleSubmit}>{title}</button>
        </form>
      </div>
      <hr className='hr_sigin' />
      <h4>{`${title} con:`}</h4>
      <div className='SignIn-social'>
        <button type='button'>
          <img src={google} alt='Google' />
        </button>
        <button type='button'>
          <img src={facebook} alt='Facebook' />
        </button>
      </div>
    </div>
  )
}

export default SignIn
