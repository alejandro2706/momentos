import React from 'react'
import '../styles/components/Session.sass'
import { Link } from 'react-router-dom'
import logo from '../assets/brand/white-logo-fixed.png'

function Session() {
  return (
    <div className='Session'>
      <div className='Session-sidebar'>
        <div className='Session-sidebar_brand'>
          <img src={logo} alt='brand' />
        </div>
      </div>
      <div className='Session-sign'>
        <h3>Iniciar Sesión</h3>
        <div className='Session-sign_form'>
          <h6>Not member? Sign Up</h6>
          <form action='post'>
            <label htmlFor='email'>
              Email address
              <div>
                <input type='text' name='email' id='email' />
              </div>
            </label>
            <label htmlFor='password'>
              Password
              <div>
                <input type='text' name='password' id='password' />
              </div>
            </label>
            <Link to='/forgot'>
              forgot password?
            </Link>
            <input type='submit' name='submit' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Session
