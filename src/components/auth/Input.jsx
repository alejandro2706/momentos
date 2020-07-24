import React from 'react'

const Input = ({ name, type, className, value, onchange }) => (
  <label htmlFor={name} className={className}>
    {name}
    <div>
      <input type={type} name={name} autoComplete='on' value={value} onChange={onchange} />
    </div>
  </label>
)

export default Input
