import React from 'react'
import '../../styles/components/About/AboutItem.sass'

const AboutItem = ({ title, children }) => (
  <div className='About-history_section'>
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
)

export default AboutItem
