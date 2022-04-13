import * as React from 'react'

const InputText = ({ label, value, onChange }) => {
  return <label>
    {label} : <input type='text' value={value} onChange={onChange} />
  </label>
}

export default InputText