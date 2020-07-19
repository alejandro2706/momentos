import React from 'react'
import '../../styles/components/auth/SignIn.sass'
import facebook from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google-icon.svg'

const SignIn = ({ className, title, register, btnValue }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className='SignIn-form'>
        <form action='post'>
          {register === true && (
            <label htmlFor='name'>
              Name
              <div className='SignUp-form_input'>
                <input type='text' name='name' id='name' />
              </div>
            </label>
          )}
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
          <input type='button' name='submit' className='btn' value={btnValue} />
        </form>
      </div>
      <hr />
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
