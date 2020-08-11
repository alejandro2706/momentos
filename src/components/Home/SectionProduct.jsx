import React, { useState, useRef, useEffect } from 'react'
import '../../styles/components/Home/SectionProduct.sass'
import { Link } from 'react-router-dom'

const SectionProduct = ({ image, title, route, description }) => {
  const [className, setClassName] = useState('hidden')
  const product = useRef(null)
  useEffect(() => {
    function onViewInWindow(entries) {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setClassName('visible')
      }
    }
    const observer = new IntersectionObserver(onViewInWindow, {})
    observer.observe(product.current)
  }, [])

  return (
    <div className={`Section-products ${className}`} ref={product}>
      <div className='Section-products_image'>
        <img src={image} alt='product1' />
      </div>
      <div className='Section-products_desc'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='Section-products_button'>
          <Link to={`/${route}`}>
            <button type='button' className='btn'>
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SectionProduct
