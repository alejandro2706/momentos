import { useState, useEffect } from 'react'

function useObserver(entries, view) {
  const [item, setItem] = useState(null)
  const options = { root: null, threshold: view }
  const observer = new window.IntersectionObserver(options)
  useEffect(() => {
    setItem(entries)
    observer.observe(item)
  })
}

export default useObserver
