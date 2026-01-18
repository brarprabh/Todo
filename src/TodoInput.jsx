function TodoInput({ text, setText, addTodo }) {
  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Enter a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
         if (e.key === "Enter") {
         addTodo();
         }
        }}
      />

      <button onClick={addTodo}
      disabled={!text.trim()}
      >Add
      </button>
    </div>
  );
}

export default TodoInput;
