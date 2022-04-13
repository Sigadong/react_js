import React, { useState } from "react";
// Mengubah class component menjadi stateful functional component menggunakan Hook.

const Button = ({ text }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  return <button onClick={handleClick}>
    {text} {counter}
  </button>
}