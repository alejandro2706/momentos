import React, { useState, useEffect } from 'react'
import './Products.sass'
import { useLocation } from 'react-router-dom'
import ProductItem from '../../components/ProductItem'
import ProductsLoader from '../../components/ProductsLoader'
import getSubProduct from '../../db/getSubProduct'

const Products = () => {

  const [products, setProducts] = useState()
  const location = useLocation()
  const [title, setTitle] = useState(null)
  const [collectionId, setCollectionId] = useState(null)

  useEffect(() => {
    setTitle(location.pathname.replace('/p/', '').toLocaleLowerCase())
    setCollectionId(location.state.id)
  }, [location.pathname, location.state, title])

  useEffect(() => {
    if (collectionId && title) {
      getSubProduct(collectionId, title)
        .then(setProducts)
    }
  }, [collectionId, location, title])

  return (
    <div className='Layout'>
      <h2>{title}</h2>
      <p>Los vas a amar</p>
      <div className='Layout-grid'>
        {products ? products.map((item) => (
          <ProductItem
            key={item.id}
            title={item.data().title}
            image={item.data().image}
          />
        )) : [1, 2, 3, 4].map((index) => <ProductsLoader key={index} />)}
      </div>
    </div>
  )
}

export default Products
