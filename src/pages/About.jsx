import React from 'react'
import '../styles/components/About/About.sass'
import { Link } from 'react-router-dom'
import AboutImage from '../components/About/AboutImage'
import AboutItem from '../components/About/AboutItem'
import historyImage from '../assets/images/history.jpg'
import missionImage from '../assets/images/mission.jpg'

function About() {
  return (
    <div className='About'>
      <div className='About-title'>
        <h2>Nosotros</h2>
      </div>
      <div className='About-main'>
        <h3>Entregando Momentos especiales</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla nam inventore tempora expedita eveniet iure! Fugit, delectus rerum suscipit, cum voluptates dolores maxime aut debitis, esse praesentium maiores velit!</p>
        <button type='button' className='btn'>
          <Link to='/products'>Descubre Cómo</Link>
        </button>
      </div>
      <div className='About-history'>
        <AboutItem title='Nuestra Historia'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis vitae quod voluptatem illo odit labore a sequi, cumque illum aliquam veritatis totam nostrum animi explicabo corporis natus, ab numquam quia?
        </AboutItem>
        <AboutImage image={historyImage} />
        <AboutImage image={missionImage} />
        <AboutItem title='Mision'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores quas molestiae recusandae numquam! Distinctio pariatur animi beatae tempora autem dolorem illum delectus vel necessitatibus. Alias iste laborum doloremque accusantium.
        </AboutItem>
      </div>
    </div>
  )
}

export default About
