import React from 'react'
import phoneIcon from '../../assets/icons/mobile.svg'
import location from '../../assets/icons/location.svg'
import mail from '../../assets/icons/mail.svg'
import './GetInTouch.sass'

const email = 'alejandro27062@gmail.com'
const phone = 3192025215

const GetInTouch = () => (
  <div className='Footer-git'>
    <h2>Más información</h2>
    <div className='Footer-git_items'>
      <h3>Escríbenos</h3>
      <img src={phoneIcon} alt='phone' />
      <span>
        <a href={`https://wa.me/${phone}`} target='_blank' rel='noreferrer'>
          ir a WhatsApp
        </a>
      </span>
    </div>
    <div className='Footer-git_items'>
      <h3>Contáctanos</h3>
      <img src={mail} alt='email-icon' />
      <span>
        <a href={`mailto:${email}`} target='_blank' rel='noreferrer'>
          ir a Gmail
        </a>
      </span>
    </div>
    <div className='Footer-git_items'>
      <h3>Horarios</h3>
      <img src={location} alt='location icon' />
      <span>
        lun-vie 10am - 6pm
      </span>
    </div>
  </div>
)

export default GetInTouch
