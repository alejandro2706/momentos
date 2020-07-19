import React from 'react'
import '../styles/components/Footer.sass'
import phone from '../assets/icons/mobile.svg'
import location from '../assets/icons/location.svg'
import mail from '../assets/icons/mail.svg'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import maps from '../assets/icons/google-maps.svg'
import logo from '../assets/brand/white-logo.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-main'>
        {/* <h1>Momentos</h1>
        <p>
          A description about what we do, why we do, the benefits that make us unique from the rest of the others bakeries.
          We help you getting better your best Moments around your life with special presents to your loved ones.
        </p> */}
        <img src={logo} alt='logo' />
      </div>
      <div className='Footer-git'>
        <h2>Get In touch!</h2>
        <div className='Footer-git_items'>
          <h3>Llamanos</h3>
          <img src={phone} alt='phone' />
          {/* <p>
            3192025215
          </p> */}
        </div>
        <div className='Footer-git_items'>
          <h3>Escríbenos</h3>
          <img src={mail} alt='email-icon' />
          {/* <p>
            momentos@gmail.com
          </p> */}
        </div>
        <div className='Footer-git_items'>
          <h3>Visítanos</h3>
          <img src={location} alt='location icon' />
          {/* <p>
            Cra 2B # 13 - 126
          </p> */}
        </div>
      </div>
      <div className='Footer-social'>
        <h2>Social Media</h2>
        <div className='Footer-social_icons'>
          <a href='https://www.facebook.com/momentos.ocasion' target='_blank' rel='noreferrer'>
            <img src={facebook} alt='facebook' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='instagram' />
          </a>
          <a href='https://goo.gl/maps/WwgW3gBkLc3Mwhcn7' target='_blank' rel='noreferrer'>
            <img src={maps} alt='google maps' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
