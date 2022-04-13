// Penggunaan useReducer Untuk Membuat Counter
import { useReducer } from "react";

const reducer = function (state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const CounterComponent = props => {
  let [counter, dispatch] = useReducer(reducer, 0);

  return <div>
    <button onClick={e => dispatch({ type: 'DECREMENT' })}>-</button>
    {counter}
    <button onClick={e => dispatch({ type: 'INCREMENT' })}>+</button>
  </div>
}

export default CounterComponent;
