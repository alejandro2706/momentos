import React from 'react'
import './AboutImage.sass'

function AboutImage({ image }) {
  return (
    <div className='About-history_image'>
      <img src={image} alt='history' />
    </div>
  )
}

export default AboutImage
