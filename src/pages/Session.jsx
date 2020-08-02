import React, { useState } from 'react'
import '../styles/components/Session.sass'
import SignIn from '../components/auth/SignIn'

function Session() {
  const [sessionState, setSessionState] = useState({
    className: 'SignIn',
    title: 'Iniciar Sesión',
    register: false,
    btnTitle: 'Regístrate',
  })
  function handleSession() {
    if (sessionState.className === 'SignIn') {
      setSessionState({
        className: 'SignUp',
        title: 'Regístrate',
        register: true,
        btnTitle: 'Iniciar sesión',
      })
    } else {
      setSessionState({
        className: 'SignIn',
        title: 'Iniciar Sesión',
        register: false,
        btnTitle: 'Regístrate',
      })
    }
  }

  return (
    <div className='Session'>
      <button onClick={handleSession} type='button' className='Session-button'>{sessionState.btnTitle}</button>
      <div className={sessionState.className}>
        <SignIn
          title={sessionState.title}
          register={sessionState.register}
        />
      </div>
    </div>
  )
}

export default Session
