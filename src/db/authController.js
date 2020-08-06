import { SwalWithBtn, SwalWithNoButton } from '../utils/SwalModals'
import { app, GoogleProvider, FacebookProvider } from './config'

function signUpEmailPass(user) {
  app.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((result) => {
      result.user.updateProfile({ displayName: user.name })
      result.user.sendEmailVerification({ url: 'https://momentos-30bd0.web.app/' })
        .catch((err) => {
          console.error(err)
          return SwalWithBtn.fire({
            icon: 'error',
            title: 'Error al enviar el correo de verificación',
          })
        })
      app.auth().signOut()
      SwalWithBtn.fire({
        icon: 'success',
        title: 'correo de verificación enviado',
        text: 'Revisa tu correo!',
      })
    })
    .catch((err) => {
      switch (err.code) {
        case 'auth/invalid-email':
          SwalWithNoButton.fire('Correo invalido')
          break;
        case 'auth/weak-password':
          SwalWithNoButton.fire('Tu contraseña debe ser mayor a 6 caracteres')
          break
        case 'auth/email-already-in-use':
          SwalWithNoButton.fire('Este correo ya esta registrado')
          break
        default:
          SwalWithNoButton.fire('Error al crear tu cuenta')
          break;
      }
    })
}

function signInEmailPass(user) {
  app.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((result) => {
      if (result.user.emailVerified) {
        SwalWithNoButton.fire({
          icon: 'success',
          title: `Bienvenido ${result.user.displayName}`,
        })
      } else {
        app.auth().signOut()
        SwalWithBtn.fire({
          icon: 'error',
          title: 'Verifica tu correo',
          text: 'Por favor verifica tu correo antes de ingresar',
        })
          .then(() => {
            window.location.reload(true)
          })
      }
    })
    .catch((err) => {
      switch (err.code) {
        case 'auth/wrong-password':
          SwalWithNoButton.fire('Contraseña invalida')
          break
        case 'auth/user-not-found':
          SwalWithNoButton.fire('Usuario no encontrado')
          break
        case 'auth/argument-error':
          SwalWithNoButton.fire('Datos incorrectos')
          break
        default:
          SwalWithNoButton.fire('Error al autenticarse')
          break;
      }
    })
}

function authWithGoogle() {
  const provider = GoogleProvider
  app.auth().signInWithPopup(provider)
    .catch((err) => {
      SwalWithNoButton.fire('Error al autenticarse con Google')
      console.error(err)
    })
    .then((result) => {
      SwalWithNoButton.fire({
        icon: 'success',
        text: `Bienvenido ${result.user.displayName}`,
      })
    })
}

function authWithFacebook() {
  const provider = FacebookProvider
  app.auth().signInWithPopup(provider)
    .catch((err) => {
      if (err.code === 'auth/account-exists-with-different-credential') {
        SwalWithNoBtn.fire('Ya existe una cuenta con este Email')
      } else {
        SwalWithNoBtn.fire('Error al autenticarse con Facebook')
      }
    })
    .then((result) => {
      console.log(result.user)
      SwalWithNoButton.fire({
        icon: 'success',
        title: `Bienvenido ${result.user.displayName}`,
      })
    })
}

export {
  signUpEmailPass,
  signInEmailPass,
  authWithGoogle,
  authWithFacebook,
}

