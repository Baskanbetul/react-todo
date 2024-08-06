import React from "react";

function TodoListItem({ title }) {
  return (
    <li>
      <span>{title}</span>
      <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default TodoListItem;
