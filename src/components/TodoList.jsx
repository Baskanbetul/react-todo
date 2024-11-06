import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types"; // Import PropTypes

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(function (item) {
        return (
          <TodoListItem
            title={item.title}
            key={item.id}
            id={item.id}
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired, // Define propTypes for onRemoveTodo
};

export default TodoList;
