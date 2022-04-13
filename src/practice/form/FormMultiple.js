import * as React from 'react'
import InputText from './InputText'
// Menangani Form Multiple

const FormMultiple = () => {
  // State form memiliki 3 item data yaitu name, phone, dan email
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: '',
  })

  const handleSubmit = event => {
    event.preventDefault()
    // sent to server
    console.log(JSON.stringify(form))
    alert(JSON.stringify(form))
  }

  return <form onSubmit={handleSubmit}>
    <InputText label='Name' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
    <InputText label='Phone' value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
    <InputText label='Email' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
    <input type='submit' value='Submit' />
  </form>
}

export default FormMultiple