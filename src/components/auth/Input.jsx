import React from 'react'

const Input = ({ name, title, type, className, onchange, reference }) => (
  <label htmlFor={name} className={className}>
    {title}
    <div>
      <input type={type} name={name} autoComplete='on' onChange={onchange} required ref={reference || null} />
    </div>
  </label>
)

export default Input
