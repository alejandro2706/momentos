import React from 'react'

const Loading = ({ className, children }) => (
  <div className={`${className || 'Loading'}`}>
    {children || <h1>Loading...</h1>}
  </div>
)
export default Loading
