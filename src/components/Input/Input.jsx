import React from 'react'

const Input = ({ name, title, type, className, onchange, reference, required = false, value }) => (
  <label htmlFor={name} className={className}>
    {title}
    <div>
      <input type={type} value={value} name={name} autoComplete='on' onChange={onchange} required={required} ref={reference || null} />
    </div>
  </label>
)

export default Input
