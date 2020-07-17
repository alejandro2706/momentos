import React from 'react'
import '../styles/components/About.sass'

class About extends React.Component {
  render() {
    return (
      <div className='About'>
        <div className='About-title'>
          <h2>About Us</h2>
        </div>
        <div className='About-main'>
          <h3>Entregando Momentos especiales</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla nam inventore tempora expedita eveniet iure! Fugit, delectus rerum suscipit, cum voluptates dolores maxime aut debitis, esse praesentium maiores velit!</p>
          <button type='button' className='btn'>Descubre como</button>
        </div>
        <div className='About-history'>
          <div className='About-history_us'>
            <h2>Nuestra historia</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo unde mollitia debitis eveniet rerum quisquam temporibus necessitatibus! Vitae modi vel adipisci, inventore repudiandae sint fuga ipsa enim, in repellendus consequuntur.</p>
          </div>
          <div className='About-history_image'>
            <img src='https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='history' />
          </div>
          <div className='About-history_image'>
            <img src='https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='vision' />
          </div>
          <div className='About-history_idea'>
            <h2>Mision</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, consectetur doloribus! Hic itaque iusto voluptatum deserunt eaque quaerat fugiat ea impedit cupiditate, obcaecati molestias similique distinctio quidem soluta, quos fuga.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
