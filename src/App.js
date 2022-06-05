import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { complete: false, task: "Read about MongoDb" },
    { complete: false, task: "Read about MongoDb" },
    { complete: false, task: "Read about MongoDb" },
  ]);

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TodoForm
        addTodo={(todo) => {
          if (todo.task.trim().length > 0) {
            setTodos([...todos, todo]);
          }
        }}
      ></TodoForm>
      <TodoList
        todos={todos}
        updateTodos={(list) => {
          setTodos(list);
        }}
      ></TodoList>
    </div>
  );
}

export default App;
