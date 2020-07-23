import React, { useState } from 'react'
import '../styles/components/Session.sass'
import SignIn from '../components/auth/SignIn'

function Session() {
  const [className, setClassName] = useState('SignIn')
  const [title, setTitle] = useState('Iniciar Sesión')
  const [register, setRegister] = useState(false)
  const [btnTitle, setBtnTitle] = useState('Regístrate')
  function handleSession() {
    if (className === 'SignIn') {
      setClassName('SignUp')
      setTitle('Regístrate')
      setRegister(true)
      setBtnTitle('Iniciar sesión')
    } else {
      setClassName('SignIn')
      setTitle('Iniciar Sesión')
      setRegister(false)
      setBtnTitle('Regístrate')
    }
  }
  //authentication with firebase

  return (
    <div className='Session'>
      <div className={className}>
        <button onClick={handleSession} type='button' className='Session-button'>{btnTitle}</button>
        <SignIn
          className={className}
          title={title}
          register={register}
        />
      </div>
    </div>
  )
}

export default Session
