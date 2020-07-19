import React, { useState } from 'react'
import '../styles/components/Session.sass'
import SignIn from '../components/auth/SignIn'

function Session() {
  const [className, setClassName] = useState('SignIn')
  const [title, setTitle] = useState('Log in')
  const [register, setRegister] = useState('false')
  const [btnTitle, setBtnTitle] = useState('Regístrate')
  function handleSession() {
    if (className === 'SignIn') {
      setClassName('SignUp')
      setTitle('Register')
      setRegister(true)
      setBtnTitle('Inicia Sesión')
    } else {
      setClassName('SignIn')
      setTitle('Log In')
      setRegister(false)
      setBtnTitle('Regístrate')
    }
  }
  return (
    <div className='Session'>
      <div className={className}>
        <button onClick={handleSession} type='button' className='Session-button'>{btnTitle}</button>
        <SignIn
          className={className}
          title={title}
          register={register}
          btnValue='Iniciar Sesión'
        />
      </div>
    </div>
  )
}

export default Session
