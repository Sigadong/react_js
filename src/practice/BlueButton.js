import * as React from 'react'
// Event pada komponen
const BlueButton = ({ onCustomClick, caption }) => {
  return <button style={{ border: '2px solid blue' }} onClick={onCustomClick}>
    {caption}
  </button>
}

export default BlueButton

// **Tuliskan kode ini di App.js
// function info() {
//   alert('Lorem ipsum dolor sit amet');
// }
// <BlueButton onCustomClick={info} caption='Tampilkan Info' />