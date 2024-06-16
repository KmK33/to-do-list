function ToDoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

function ToDoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default ToDoList;
