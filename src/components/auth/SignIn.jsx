import React from 'react'
import '../../styles/components/auth/SignIn.sass'
import facebook from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google-icon.svg'

const SignIn = ({ className, title, register }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className='SignIn-form'>
        <form action='post'>
          {register === true && (
            <label htmlFor='name'>
              Nombre
              <div className='SignUp-form_input'>
                <input type='text' name='name' id='name' />
              </div>
            </label>
          )}
          <label htmlFor='email'>
            Email
            <div className='SignIn-form_input'>
              <input type='email' name='email' id='email' autoComplete='username' />
            </div>
          </label>
          <label htmlFor='password'>
            Contraseña
            <div className='SignIn-form_input'>
              <input type='password' name='password' id='password' autoComplete='current-password' />
            </div>
          </label>
          <button type='submit'>{title}</button>
        </form>
      </div>
      <hr />
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
