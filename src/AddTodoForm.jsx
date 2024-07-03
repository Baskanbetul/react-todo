import React from "react";

function AddTodoForm() {
  return (
    <div>
      <form>
        <label htmlFor="title" style={{ margin: "5px" }}>
          Title
        </label>
        <input id="todoTitle" type="text"></input>
        <button>Add</button>
      </form>

      {/* <label htmlFor="search">Search: </label> */}
      {/* <input id="search" type="text" /> */}
    </div>
  );
}

export default AddTodoForm;
