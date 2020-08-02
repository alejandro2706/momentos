import Swal from 'sweetalert2'
import { app } from './config'
import 'firebase/firebase-firestore'

class Form {
  constructor() {
    this.firebase = app
    this.db = this.firebase.firestore()
    this.db.settings({})
  }

  createForm(data) {
    if (data.name && data.surname && data.email && data.phone && data.message) {
      return this.db.collection('formularios')
        .add({
          name: data.name,
          surname: data.surname,
          email: data.email,
          phone: data.phone,
          message: data.message,
          date: new Date(),
        })
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Tu mensaje fue enviado correctamente',
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
    return Swal.fire('Por favor llena los campos')
  }
}

const formController = new Form()
export default formController
