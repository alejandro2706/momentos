import React from 'react'
import '../styles/components/Session.sass'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'

function Session() {
  return (
    <div className='Session'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Session
