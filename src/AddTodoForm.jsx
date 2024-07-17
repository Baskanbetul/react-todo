import React from "react";

function AddTodoForm(props) {
  function handleAddTodo(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");
    const todoTitle = input.value;
    console.log(todoTitle);
    console.log("Form Submitted");
    props.onAddTodo(todoTitle);
    form.reset();
  }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="title" style={{ margin: "5px" }}>
          Title
        </label>
        <input
          name="title"
          placeholder="todo"
          id="todoTitle"
          type="text"
          // Next, retrieve the value of the title element from the event target and store it in a variable named todoTitle buradan devam et
        ></input>
        <button type="submit">Submit</button>
      </form>

      {/* <label htmlFor="search">Search: </label> */}
      {/* <input id="search" type="text" /> */}
    </div>
  );
}

export default AddTodoForm;
