import { db } from './config'

async function getSubProduct(collectionId, collectionName) {
  const collectionRef = db.collection('Productos')
  return collectionRef.doc(collectionId).collection(collectionName).get()
    .then(({ docs }) => docs)
}

export default getSubProduct
