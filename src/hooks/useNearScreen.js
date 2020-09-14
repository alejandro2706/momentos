import { useEffect, useState, useRef } from 'react'

function useNearScreen() {
  const [className, setClassName] = useState('hidden')
  const product = useRef(null)

  useEffect(() => {
    const options = {
      threshold: 0.60,
    }
    function onViewInWindow(entries) {
      const entry = entries[0]
      if (entry.intersectionRatio > options.threshold) {
        setClassName('visible')
      }
    }
    const observer = new IntersectionObserver(onViewInWindow, options)
    observer.observe(product.current)
  }, [])

  return { className, product }
}

export default useNearScreen
