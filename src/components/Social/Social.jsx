import React from 'react'
import './Social.sass'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import maps from '../../assets/icons/google-maps.svg'

function Social() {
  return (
    <div className='Footer-social'>
      <h2>Social Media</h2>
      <div className='Footer-social_icons'>
        <a href='https://www.facebook.com/momentos.ocasion' target='_blank' rel='noreferrer'>
          <img src={facebook} alt='facebook' />
        </a>
        <a href='https://www.instagram.com/momentosocasion/?hl=es-la' target='_blank' rel='noreferrer'>
          <img src={instagram} alt='instagram' />
        </a>
        <a href='https://goo.gl/maps/WwgW3gBkLc3Mwhcn7' target='_blank' rel='noreferrer'>
          <img src={maps} alt='google maps' />
        </a>
      </div>
    </div>
  )

}

export default Social
