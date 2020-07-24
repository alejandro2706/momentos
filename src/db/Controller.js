import firebase, { auth } from 'firebase'
import config from './config'

firebase.initializeApp(config)

function signUpEmailPass(data) {
  auth().createUserWithEmailAndPassword(data.email, data.password)
    .then((result) => {
      result.user.updateProfile({
        displayName: data.name,
      })
      console.log(result)
    })
}

function signInEmailPass(email, password) {
  return { email, password }
}

export {
  signInEmailPass,
  signUpEmailPass,
}
