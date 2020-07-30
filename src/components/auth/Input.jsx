import React from 'react'

const Input = ({ name, type, className, onchange }) => (
  <label htmlFor={name} className={className}>
    {name}
    <div>
      <input type={type} name={name} autoComplete='on' onChange={onchange} required />
    </div>
  </label>
)

export default Input
