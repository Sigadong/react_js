import * as React from 'react'
import InputText from './InputText'
// Membuat Validasi Dasar Pada Form

const FormBasicValidation = () => {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: ''
  })

  const [error, setError] = React.useState({
    name: 'name minimal 3 karakter',
    phone: 'phone minimal 3 karakter',
    email: 'email minimal 3 karakter'
  })

  const handleSubmit = event => {
    event.preventDefault()
    if (error['name'].length > 0) {
      alert(error['name'])
    } else if (error['phone'].length > 0) {
      alert(error['name'])
    } else if (error['email'].length > 0) {
      alert(error['email'])
    } else {
      // Sent to server
      console.log(form)
      alert('Validation Success..')
    }
  }

  const handleChange = (field, e) => {
    // validasi disini
    setError('')
    const value = e.target.value
    if (value.length < 3) {
      setError({ ...error, [field]: `${field} minimal 3 karakter` })
    } else {
      setError({ ...error, [field]: '' })
    }
    setForm({ ...error, [field]: value })
  }

  return <form onSubmit={handleSubmit}>
    {error.name}
    <InputText label='Name' value={form.name} onChange={(e) => handleChange('name', e)} /> <br />
    {error.phone}
    <InputText label='Phone' value={form.phone} onChange={(e) => handleChange('phone', e)} /> <br />
    {error.email}
    <InputText label='Email' value={form.email} onChange={(e) => handleChange('email', e)} /> <br />
    <input type='submit' value='Submit' />
  </form>
}

export default FormBasicValidation