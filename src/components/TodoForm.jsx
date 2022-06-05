import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput) return;
    addTodo({ complete: false, task: userInput });
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Nova tarefa"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
    </div>
  );
}
