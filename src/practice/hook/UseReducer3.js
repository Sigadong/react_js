// 
import { useReducer } from "react";

function reducer(todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
      let nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;
      console.log([...todos, { id: nextId, completed: false, ...action.todo }]);
      return [...todos, { id: nextId, completed: false, ...action.todo }];
    case 'REMOVE_TODO':
      return todos.filter(todo => todo.id !== action.id);
    case 'UPDATE_TODO':
      return todos.map(todo => todo.id === action.todo.id ? action.todo : todo);
    case 'TOGGLE_COMPLETE':
      return todos.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
    default:
      return todos;
  }
}

const TodoListComponent = props => {
  let [todos, dispatch] = useReducer(reducer, []);

  return <div>
    {todos}
    <button onClick={e => dispatch({ type: 'ADD_TODO', todo: { title: 'Belajar Hooks' } })}>Add</button>
    <button onClick={e => dispatch({ type: 'REMOVE_TODO', id: 10 })}>Remove</button>
    <button onClick={e => dispatch({ type: 'UPDATE_TODO', todo: { id: 10, title: 'Judul todo baru' } })}>Remove</button>
    <button onClick={e => dispatch({ type: 'TOGGLE_COMPLETE', id: 10 })}>Toggle</button>
  </div>
}

export default TodoListComponent;
