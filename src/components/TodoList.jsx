import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types"; // Import PropTypes

// const todoList = [
//   { title: "Go shopping", id: "1" },
//   { title: "Finish cleaning", id: "2" },
//   { title: "Go to gym", id: "3" },
// ];

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
        /* <li key={item.objectID}>
            <span>{item.title}</span>
          </li> */
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
