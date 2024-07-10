import React from "react";

function AddTodoForm() {
  function handleAddTodo(event) {
    event.preventDefault();
    console.log("Form Submitted");
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
