import React, { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState();
  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle(""); // form.reset(); same work
  }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          id="todoTitle"
          value={todoTitle}
          onInputChange={handleTitleChange}
          placeholder="todo"
        >
          Title
        </InputWithLabel>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
