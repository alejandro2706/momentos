import React from 'react'
import '../../styles/components/auth/SignIn.sass'
import facebook from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google-icon.svg'

const SignIn = () => {
  return (
    <div className='SignIn'>
      <h3>Log In</h3>
      <div className='SignIn-form'>
        <form action='post'>
          <label htmlFor='email'>
            Email address
            <div className='SignIn-form_input'>
              <input type='email' name='email' id='email' />
            </div>
          </label>
          <label htmlFor='password'>
            Password
            <div className='SignIn-form_input'>
              <input type='password' name='password' id='password' />
            </div>
          </label>
          <input type='button' name='submit' className='btn' value='Iniciar Sesión' />
        </form>
      </div>
      <h4>Iniciar sesión con:</h4>
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
