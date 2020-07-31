import Swal from 'sweetalert2'
import { app, GoogleProvider, FacebookProvider } from './config'

class Auth {
  constructor() {
    this.firebase = app
    this.googleProvider = GoogleProvider
    this.facebookProvider = FacebookProvider
  }

  signUpEmailPass(user) {
    this.firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        console.log('[firebase controller]', result)
        result.user.updateProfile({ displayName: user.name })
        result.user.sendEmailVerification({ url: 'https://momentos-30bd0.web.app/' })
          .catch((err) => {
            console.error(err)
            Swal.fire('Error al enviar el correo de verificación')
          })
        this.firebase.auth().signOut()
        Swal.fire({
          icon: 'success',
          title: 'correo de verificación enviado',
          text: 'Revisa tu correo!',
        })
      })
      .catch((err) => {
        if (err.code === 'auth/invalid-email') {
          Swal.fire({
            title: 'Correo invalido',
            showConfirmButton: false,
            timer: 1600,
          })
        } else if (err.code === 'auth/weak-password') {
          Swal.fire({
            title: 'Contraseña invalida',
            showConfirmButton: false,
            timer: 1600,
            timerProgressBar: true,
          })
        } else if (err.code === 'auth/email-already-in-use') {
          Swal.fire({
            title: 'Este correo ya esta registrado',
            timer: 1600,
            timerProgressBar: true,
          })
        }
      })
  }

  signInEmailPass(user) {
    this.firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        if (result.user.emailVerified) {
          Swal.fire({
            title: `Bienvenido ${user.name}`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true,
          })
          console.log(user)
        } else {
          this.firebase.auth().signOut()
          Swal.fire({
            title: 'Verifica tu correo',
            text: 'Por favor verifica tu correo antes de ingresar',
            icon: 'error',
          })
            .then(() => {
              window.location.reload(true)
            })
        }
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

