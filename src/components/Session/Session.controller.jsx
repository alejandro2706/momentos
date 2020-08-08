import React, { useState } from 'react'
import SignIn from './SignIn'
import { SwalWithNoButton } from '../../utils/SwalModals'
import { signUpEmailPass, signInEmailPass, authWithGoogle, authWithFacebook } from '../../db/authController'

function SessionController() {
  const [form, setForm] = useState('')
  const [sessionState, setSessionState] = useState({
    className: 'SignIn',
    title: 'Iniciar Sesión',
    register: false,
    btnTitle: 'Regístrate',
  })

  const handleSession = () => {
    if (!sessionState.register) {
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

  const onFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const onSubmitForm = (e) => {
    e.preventDefault()
    if (form) {
      if (sessionState.register) {
        if (!form.name) {
          return SwalWithNoButton.fire('Por favor ingresa tu nombre')
        }
        return signUpEmailPass(form)
      }
      return signInEmailPass(form)
    }
    return SwalWithNoButton.fire('Llena los campos')
  }

  return (
    <div className='Session'>
      <button onClick={handleSession} type='button' className='Session-button'>{sessionState.btnTitle}</button>
      <div className={sessionState.className}>
        <SignIn
          title={sessionState.title}
          register={sessionState.register}
          onFormChange={onFormChange}
          onSubmitForm={onSubmitForm}
          authWithFacebook={authWithFacebook}
          authWithGoogle={authWithGoogle}
          form={form}
        />
      </div>
    </div>
  )
}

export default SessionController
