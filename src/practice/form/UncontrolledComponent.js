import * as React from 'react'

const UnControlled = () => {
  const inputName = React.useRef(null)
  const inputPhoto = React.useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    // kirim data form
    alert(inputName.current.value)
    // File API untuk dapat nama file
    alert(inputPhoto.current.file[0].value)
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Name: <input type='text' ref={inputName} defaultValue='alex' />
    </label>
    <label>
      Photo: <input type='file' ref={inputPhoto} />
    </label>
    <input type='submit' value='Submit' />
  </form>
}

export default UnControlled