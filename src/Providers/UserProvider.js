import React, { useState, useEffect } from 'react'
import UserContext from '../context'
import { app } from '../db/config'

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) return setCurrentUser(user)
      return null
    })
  })
  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}

export default UserProvider
