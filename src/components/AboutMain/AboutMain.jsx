import React from 'react'
import { Link } from 'react-router-dom'
import './AboutMain.sass'

function AboutMain() {
  return (
    <div className='About-main'>
      <h3>Entregando Momentos especiales</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla nam inventore tempora expedita eveniet iure! Fugit, delectus rerum suscipit, cum voluptates dolores maxime aut debitis, esse praesentium maiores velit!</p>
      <button type='button' className='btn'>
        <Link to='/products'>Descubre Cómo</Link>
      </button>
    </div>
  )
}

export default AboutMain
