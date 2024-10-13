import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import style from "./TodoListItem.module.css";

function TodoListItem({ title, id, onRemoveTodo }) {
  return (
    <li className={`${style.listItem} ${style.ListItem}`}>
      <span>{title}</span>
      <button onClick={() => onRemoveTodo(id)}>Remove</button>
    </li>
  );
}

TodoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onRemoveTodo: PropTypes.func.isRequired, // Define propTypes
};

export default TodoListItem;
