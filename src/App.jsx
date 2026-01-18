import { useState } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

function addTodo() {
  if (text.trim() === "") return; 

  const newTodo = { 
    id : Date.now(),
    text : text,
    completed:false,
  };

  

  setTodos([...todos, newTodo]);
  setText("");
}

function deleteTodo(id) {    //filter the one and delete it
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos); // we return a new array rather than changing the previous one..
  }

  function toggleTodo(id) {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) { // if any id match then flip the completed section
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });

  setTodos(updatedTodos);
}


  return (
    <div>
      <Header/>
      <TodoInput // props are added
      text = {text}
      setText={setText}
      addTodo={addTodo}
       />

    <ul>
      {todos.map((todo) => ( // key -> helps know the index and use of map -> used for traversal 
        <li key={todo.id}>
          <span
          onClick={() => toggleTodo(todo.id)}
          style={{
          textDecoration: todo.completed ? "line-through" : "none",
           cursor: "pointer",
          }}
          >
         { todo.text}
         </span>
         <button onClick={() => deleteTodo(todo.id)}>
          Delete
          </button></li>
      ))}
    </ul>

    </div>
  );
}


export default App;