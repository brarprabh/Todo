function TodoInput({ text, setText, addTodo }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
