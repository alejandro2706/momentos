import React from 'react'
import phone from '../../assets/icons/mobile.svg'
import location from '../../assets/icons/location.svg'
import mail from '../../assets/icons/mail.svg'
import '../../styles/components/Footer/GetInTouch.sass'

const GetInTouch = () => (
  <div className='Footer-git'>
    <h2>Más información</h2>
    <div className='Footer-git_items'>
      <h3>Horarios</h3>
      <img src={phone} alt='phone' />
      <span>
        lun-vie 10am - 6pm
      </span>
    </div>
    <div className='Footer-git_items'>
      <h3>Escríbenos</h3>
      <img src={mail} alt='email-icon' />
      <span>
        example@gmail.com
      </span>
    </div>
    <div className='Footer-git_items'>
      <h3>Agradecimientos</h3>
      <img src={location} alt='location icon' />
      <span>
        <a href='https://www.flaticon.com/home' target='_blank' rel='noreferrer'>Flaticons</a>
      </span>
    </div>
  </div>
)

export default GetInTouch
