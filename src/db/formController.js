import { SwalWithNoButton } from '../utils/SwalModals'
import { app } from './config'
import 'firebase/firebase-firestore'

const db = app.firestore()

function createForm(data) {
  if (data.name && data.email && data.message) {
    return db.collection('formularios')
      .add({
        name: data.name,
        surname: data.surname || null,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
        date: new Date(),
      })
      .then(() => {
        SwalWithNoButton.fire({
          icon: 'success',
          title: 'Tu mensaje fue enviado correctamente',
        })
      })
      .catch(() => {
        SwalWithNoButton.fire({
          icon: 'error',
          title: 'Error al enviar tu formulario',
        })
      })
  }
  return SwalWithNoButton.fire('Por favor llena los campos')
}

export { createForm, db }
