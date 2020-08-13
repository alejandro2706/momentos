import React from 'react'
import '../styles/components/Loading.sass'

const Loading = ({ className, children }) => (
  <div className={`${className || 'Loading'}`}>
    {children || <h1>Loading...</h1>}
  </div>
)
export default Loading
