import React from 'react'
import cupcakeIcon from '../../assets/brand/cupcake-logo.png'
import './Loading.sass'

const Loading = () => (
  <div className='Loading'>
    <div className='Loading--image'>
      <img src={cupcakeIcon} alt='Loading...' />
    </div>
  </div>
)
export default Loading
