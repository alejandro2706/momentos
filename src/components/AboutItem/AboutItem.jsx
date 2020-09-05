import React from 'react'
import './AboutItem.sass'

function AboutItem({ title, children }) {
  return (
    <div className='About-history_section'>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}

export default AboutItem
