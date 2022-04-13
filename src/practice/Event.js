import * as React from 'react';
// Menangani Event
// Event pada Element HTML

const Event1 = () => {
  return <button onClick={() => window.alert(123)}>Info</button>
}

const alert = () => window.alert(123)
const Event2 = () => {
  return <button onClick={alert}>Info</button>
}

const ubah = (obj) => {
  const btn = obj.target
  btn.innerText = 'Clicked'
}

const Event3 = () => {
  return <button onClick={ubah}>Info</button>
}

export { Event1, Event2, Event3 };