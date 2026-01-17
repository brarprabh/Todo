import { useState } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

function addTodo() {
  if (text.trim() === "") return; 

  setTodos([...todos, text]);
  setText("");
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
      {todos.map((todo, index) => ( // key -> helps know the index and use of map -> used for traversal 
        <li key={index}>{todo}</li>
      ))}
    </ul>

    </div>
  );
}


export default App;