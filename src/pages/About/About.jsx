import React from 'react'
import './About.sass'
import AboutImage from '../../components/AboutImage'
import AboutItem from '../../components/AboutItem'
import AboutMain from '../../components/AboutMain'
import missionImage from '../../assets/images/mission.jpg'
import historyImage from '../../assets/images/history.jpg'

const About = () => {
  return (
    <div className='About'>
      <div className='About-title'>
        <h2>Nosotros</h2>
      </div>
      <AboutMain />
      <div className='About-history'>
        <AboutItem title='Misión'>
          Momentos galletas y cupcakes es una empresa familiar inspirada en el sentimiento único de compartir ocasiones inolvidables con las personas que forman parte de tu vida. Nuestros productos tienen la finalidad de poder llevar sonrisas y sorprender a las personas que amas.
        </AboutItem>
        <AboutImage image={historyImage} />
        <AboutImage image={missionImage} />
        <AboutItem title='Nuestra Historia'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores quas molestiae recusandae numquam! Distinctio pariatur animi beatae tempora autem dolorem illum delectus vel necessitatibus. Alias iste laborum doloremque accusantium.
        </AboutItem>
      </div>
    </div>

  )
}

export default About
