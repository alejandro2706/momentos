import React, { useState, useEffect } from 'react'
import './Products.sass'
import { useLocation } from 'react-router-dom'
import ProductItem from '../../components/ProductItem'
import ProductsLoader from '../../components/ProductsLoader'
import getSubProduct from '../../db/getSubProduct'

const Products = () => {

  const [products, setProducts] = useState()
  const location = useLocation()
  const collectionId = location.pathname.replace('/p/', '')
  const title = location.search.replace('?t=', '').toLocaleLowerCase()

  useEffect(() => {
    getSubProduct(collectionId, title)
      .then(setProducts)
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
