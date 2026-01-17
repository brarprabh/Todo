import {useState} from "react";

function TodoInput() {
    const [text, setText] = useState("");

    return(
        <div>
            <input type="text"
            placeholder="Enter a todo"
            value={text}
            onChange={(e) => setText(e.target.value)} />

            <p>Current input : {text}</p>
        </div>
    );
}

export default TodoInput;