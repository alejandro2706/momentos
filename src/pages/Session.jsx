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

  return (
    <div className='Session'>
      <button onClick={handleSession} type='button' className='Session-button'>{btnTitle}</button>
      <div className={className}>
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
