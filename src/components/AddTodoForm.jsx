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
    // const todoTitle = input.value; // line 6 and this line do same job
    console.log(todoTitle);
    console.log("Form Submitted");
    onAddTodo({
      title: todoTitle,
      id: Date.now(),
    });
    setTodoTitle(""); // form.reset(); same work
  }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        {/* <label htmlFor="title" style={{ margin: "5px" }}>
          Title
        </label>
        <input
          name="title"
          placeholder="todo"
          id="todoTitle"
          type="text"
          value={todoTitle}
          onChange={handleTitleChange}
          // Next, retrieve the value of the title element from the event target and store it in a variable named todoTitle buradan devam et
        ></input> */}
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

      {/* <label htmlFor="search">Search: </label> */}
      {/* <input id="search" type="text" /> */}
    </div>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
