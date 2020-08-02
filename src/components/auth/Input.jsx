import React from 'react'

const Input = ({ name, title, type, className, onchange }) => (
  <label htmlFor={name} className={className}>
    {title}
    <div>
      <input type={type} name={name} autoComplete='on' onChange={onchange} required />
    </div>
  </label>
)

export default Input
