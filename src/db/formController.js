import { db } from './config'

async function createForm(data) {
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDay()
  return db.collection('formularios')
    .add({
      name: data.name,
      surname: data.surname || null,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
      date: `${day}-${month}-${year}`,
      isRead: false,
    })
    .then((data) => data)
    .catch((e) => e)
}

export { createForm, db }
