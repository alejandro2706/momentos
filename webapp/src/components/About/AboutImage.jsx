import React from 'react'
import '../../styles/components/About/AboutImage.sass'

const AboutImage = ({ image }) => (
  <div className='About-history_image'>
    <img src={image} alt='history' />
  </div>
)

export default AboutImage
