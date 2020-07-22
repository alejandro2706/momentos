import React from 'react'

const Input = ({ name, type, labelFor, className }) => (
  <label htmlFor={labelFor} className={className}>
    {name}
    <div>
      <input type={type} name={labelFor} autoComplete='on' />
    </div>
  </label>
)

export default Input
