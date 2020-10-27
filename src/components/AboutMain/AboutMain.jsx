import React from 'react'
import { Link } from 'react-router-dom'
import './AboutMain.sass'

function AboutMain() {
  return (
    <div className='About-main'>
      <h3>Entregando Momentos especiales</h3>
      <p>
        En Momentos galletas y cupcakes elaboramos nuestros productos con ingredientes de alta calidad poniendo especial atención en la delicadeza de cada uno de los sabores.
        Te ofrecemos la opción de personalizar tus pedidos porque los detalles valen mas que mil palabras.
      </p>
      <button type='button' className='btn'>
        <Link to='/products'>Descubre Cómo</Link>
      </button>
    </div>
  )
}

export default AboutMain
