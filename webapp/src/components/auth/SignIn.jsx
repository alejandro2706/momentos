import React from 'react'
import '../../styles/components/auth/SignIn.sass'
import facebook from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google-icon.svg'
import Input from './Input'

const SignIn = ({ className, title, register }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className='SignIn-form'>
        <form action='post'>
          {register === true && (
            <Input
              className='SignIn-form_label'
              name='Nombre'
              type='text'
              labelFor='name'
            />
          )}
          <Input
            className='SignIn-form_label'
            name='Email'
            type='email'
            labelFor='email'
          />
          <Input
            className='SignIn-form_label'
            name='Contraseña'
            type='password'
            labelFor='password'
          />
          <button type='button'>{title}</button>
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
