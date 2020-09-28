import React from 'react'
import ContentLoader from 'react-content-loader'

const ProductsLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={350}
    viewBox='0 0 400 460'
    backgroundColor='#ebebe3'
    foregroundColor='#eeeeee'
  >
    <rect x='0' y='60' rx='92' ry='92' width='400' height='312' />
  </ContentLoader>
)

export default ProductsLoader

