import React from 'react'
import '../../styles/components/Session/SignIn.sass'
import facebook from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google-icon.svg'
import Input from './Input'

const SignIn = ({ title, register, onFormChange, onSubmitForm, authWithGoogle, authWithFacebook, form }) => {
  const { name, password, email } = form
  return (
    <>
      <h3>{title}</h3>
      <div className='SignIn-form'>
        <form onChange={onFormChange}>
          {register && (
            <Input
              className='SignIn-form_label'
              name='name'
              type='text'
              title='nombre'
            />
          )}
          <Input
            className='SignIn-form_label'
            name='email'
            type='Email'
            title='Correo'
          />
          <Input
            className='SignIn-form_label'
            name='password'
            type='password'
            title='Contraseña'
          />
          <button type='submit' disabled={(!name, !email, !password)} onClick={onSubmitForm}>{title}</button>
        </form>
      </div>
      <hr className='hr_sigin' />
      <h4>{`${title} con:`}</h4>
      <div className='SignIn-social'>
        <button type='button' onClick={() => authWithGoogle()}>
          <img src={google} alt='Google' />
        </button>
        <button type='button' onClick={() => authWithFacebook()}>
          <img src={facebook} alt='Facebook' />
        </button>
      </div>
    </>
  )
}

export default SignIn
