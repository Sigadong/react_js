import * as React from 'react'

const Controlled = () => {
  const [name, setName] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // kirim data form
    alert(name)
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Name: <input type='text' value={name} onChange={(e) => setName(
        e.target.value
      )} />
    </label>
    <input type='submit' value='Submit' />
  </form>
}

export default Controlled