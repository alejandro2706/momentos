import { db } from './config'

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
        isRead: false,
      })
      .then(() => {
        console.log('mensaje enviado')
        // SwalWithNoButton.fire({
        //   icon: 'success',
        //   title: 'Tu mensaje fue enviado correctamente',
        // })
      })
      .catch(() => {
        console.log('mensaje no enviado')
        // SwalWithNoButton.fire({
        //   icon: 'error',
        //   title: 'Error al enviar tu formulario',
        // })
      })
  }
  return console.log('llena los campos')
}

export { createForm, db }
