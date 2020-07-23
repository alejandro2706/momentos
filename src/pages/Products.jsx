import React from 'react'
import ItemLayout from '../components/Products/ItemLayout'

const products = [
  {
    id: 1,
    name: 'Brownie',
    image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    decorated: false,
  },
  {
    id: 2,
    name: 'Galletas',
    image: 'https://images.pexels.com/photos/268364/pexels-photo-268364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    decorated: true,
  },
  {
    id: 3,
    name: 'Antojos',
    image: 'https://images.pexels.com/photos/268364/pexels-photo-268364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    decorated: true,
  },
  {
    id: 4,
    name: 'Merienda',
    image: 'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    decorated: false,
  },
]

function Products({ title }) {
  return (
    <ItemLayout
      title={title}
      products={products}
    />
  )
}

export default Products
