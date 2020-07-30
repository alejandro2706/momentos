import Swal from 'sweetalert2'
import { app, GoogleProvider, FacebookProvider } from './config'

class Auth {
  constructor() {
    this.firebase = app
    this.googleProvider = GoogleProvider
    this.facebookProvider = FacebookProvider
    this.RedirectURL = 'https://momentos-30bd0.web.app/'
  }

  signUpEmailPass(user) {
    this.firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        console.log('[firebase controller]', result)
        Swal.fire({
          title: `Bienvenido ${user.name}`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        })
        result.user.sendEmailVerification(this.RedirectURL)
      })
      .catch((err) => {
        if (err.code === 'auth/invalid-email') {
          Swal.fire('Correo invalido')
        } else if (err.code === 'auth/weak-password') {
          Swal.fire({
            title: 'Contraseña invalida',
            text: 'Tu contraseña debe ser mayor a 6 caracteres',
            showConfirmButton: false,
            timer: 1600,
            timerProgressBar: true,
          })
        } else if (err.code === 'auth/email-already-in-use') {
          Swal.fire({
            title: 'Correo ya registrado',
            text: 'Este correo ya esta registrado',
            timer: 1600,
            timerProgressBar: true,
          })
        }
      })
  }

  signInEmailPass(user) {
    this.firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        Swal.fire('Has iniciado sesión')
        console.log(user)
      })
      .catch((err) => {
        if (err.code === 'auth/wrong-password') {
          Swal.fire('Contraseña invalida')
        } else if (err.code === 'auth/user-not-found') {
          Swal.fire('Usuario no encontrado')
        } else {
          Swal.fire('Error al autenticarse')
        }
      })
  }

  authWithGoogle() {
    const provider = this.googleProvider
    this.firebase.auth().signInWithPopup(provider)
      .catch((err) => {
        Swal.fire({
          title: 'Error al autenticarse con Google',
          text: err,
        })
      })
      .then((result) => {
        console.log(result.user)
        Swal.fire({
          text: `Bienvenido ${result.user.displayName}`,
          imageUrl: result.user.photoURL,
        })
      })
  }

  authWithFacebook() {
    const provider = this.facebookProvider
    this.firebase.auth().signInWithPopup(provider)
      .catch((err) => {
        if (err.code === 'auth/account-exists-with-different-credential') {
          Swal.fire({
            title: 'Ya existe una cuenta con este Email',
          })
        } else {
          Swal.fire('Error al autenticarse con Facebook')
        }
      })
      .then((result) => {
        console.log(result.user)
        Swal.fire({
          text: `Bienvenido ${result.user.displayName}`,
          imageUrl: result.user.photoURL,
        })
      })
  }
}

const auth = new Auth()

export default auth

