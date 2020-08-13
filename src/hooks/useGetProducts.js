import { useState, useEffect } from 'react'
import { db } from '../db/formController'

const useGetProducts = (options) => {
  const [products, setProducts] = useState()
  useEffect(() => {
    db.collection('Productos').doc(options.id)
      .collection(options.collection).get()
      .then((doc) => setProducts(doc.docs))
  }, [options.collection, options.id])
  return products
}

export default useGetProducts
