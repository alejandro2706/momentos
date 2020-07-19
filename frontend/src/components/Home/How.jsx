import React from 'react'
import '../../styles/components/Home/How.sass'
import HowItem from './HowItem'

const How = () => (
  <div className='How'>
    <h2>How we work</h2>
    <p>Met the way to choose your products</p>
    <div className='How-container'>
      <HowItem title='Look for a Decoration' />
      <HowItem title='Find the correct product' />
      <HowItem title='Send us the result' />
    </div>
  </div>
)

export default How
