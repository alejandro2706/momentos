import { useState } from 'react'

function useAnimations(finalClass, height, initialClass) {
  const [className, setClassName] = useState(finalClass)
  if (document.documentElement.scrollTop > height) {
    setClassName(initialClass)
  }
  console.log('hook acitvated')
  return className
}

export default useAnimations
