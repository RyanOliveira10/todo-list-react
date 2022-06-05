export default function TodoList({ todos, updateTodos }) {
  const removeTask = (index) => {
    const updateList = todos.filter((task, taskIndex) => {
      return taskIndex !== index;
    });
    updateTodos(updateList);
  };

  const markComplete = (id) => {
    const updateList = todos.map((item, index) => {
      if (id !== index) return item;
      return { ...item, complete: !item.complete };
    });
    updateTodos(updateList);
  };

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <>
          <div
            key={index}
            className={`todo ${todo.complete ? "taskDone" : ""}`}
            onClick={() => markComplete(index)}
          >
            Item {index + 1}: {todo.task}
          </div>
          <div>
            <button
              className="button"
              onClick={() => {
                removeTask(index);
              }}
            >
              Delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
