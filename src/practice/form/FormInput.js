import * as React from 'react'
import InputText from './InputText'

const FormInput = () => {
  const [name, setName] = React.useState('')

  const handleSubmit = event => {
    event.prevenDefault()
    // Sent to server
    alert(name)
    console.log(name)
  }

  return <form onSubmit={handleSubmit}>
    <InputText label='Name' value={name} onCostumChange={(e) => setName(e.target.value)} />
    <input type='submit' value='Submit' />
  </form>
}

export default FormInput