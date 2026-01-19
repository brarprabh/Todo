import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';



import Header from './Header';
import TodoInput from './TodoInput';

function App() {

const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

const isFirstRender = useRef(true);


useEffect(() => {
  try {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      setTodos(parsedTodos);
    }
  } catch (error) {
    console.error("Error loading todos from localStorage", error);
  }
}, []);


  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);




  
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
  <div className="app-container">
    <Header />
    <TodoInput
      text={text}
      setText={setText}
      addTodo={addTodo}
    />

 
  {todos.length === 0 && (
  <p style={{ textAlign: "center", color: "#6b7280" }}>
    No todos yet 👀
  </p>
)}  

    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <span
            className={`todo-text ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

}
export default App;